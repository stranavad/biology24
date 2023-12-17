import {z} from "zod";
import {db} from '~/drizzle/db';
import {animal, history, usersPublic} from "~/drizzle/schema";
import {eq} from "drizzle-orm";
import {serverSupabaseUser} from "#supabase/server";

const CheckAnswerDto = z.object({
  id: z.number(),
  answer: z.string(),
})

export default defineEventHandler(async(event) => {
  const body = await readBody(event);
  const {id, answer} = CheckAnswerDto.parse(body);

  // Find animal
  const [foundAnimals, user] = await Promise.all([
    await db.select().from(animal).where(eq(animal.id, id)).limit(1),
    await serverSupabaseUser(event)
  ])
  if(!foundAnimals.length){
    return;
  }
  const foundAnimal = foundAnimals[0];


  if(!user){
    return;
  }

  const correct = foundAnimal.name === answer;

  const [_, currentState] = await Promise.all([
    db
      .insert(history)
      .values({
        userId: user.id,
        animalId: foundAnimal.id,
        correct,
      }),
    db
      .select({points: usersPublic.points})
      .from(usersPublic)
      .where(eq(usersPublic.userId, user.id)).limit(1)
  ]);

  let score = currentState.length ? currentState[0].points : 100;
  // This shouldn't happen
  if(!currentState.length){
    // Create record in users public with empty nickname
    await db.insert(usersPublic).values({
      userId: user.id,
      points: 100,
      nickname: 'Nevybral sis prezdivku'
    })
  }


  if(correct){
    score += 10
  } else {
    score -= 5;
  }


  await db.update(usersPublic).set({points: score}).where(eq(usersPublic.userId, user.id));

  return {
    correct,
    score
  };
})
