import {z} from "zod";
import {db} from '~/drizzle/db';
import {animal, history, usersPublic} from "~/drizzle/schema";
import {eq, sql} from "drizzle-orm";
import {getUserFromEventToken} from "~/utils/server";

const CheckAnswerDto = z.object({
  id: z.number(),
  answer: z.string(),
})

const preparedFindAnimal = db.select().from(animal).where(eq(animal.id, sql.placeholder('id'))).limit(1).prepare('get_animal_by_id')
const preparedGetCurrentUserState = db
  .select({points: usersPublic.points})
  .from(usersPublic)
  .where(eq(usersPublic.userId, sql.placeholder('id'))).limit(1).prepare('get_current_user_state')

export default defineEventHandler(async(event) => {
  const body = await readBody(event);
  const {id, answer} = CheckAnswerDto.parse(body);

  const user = await getUserFromEventToken(event);
  const foundAnimals = await preparedFindAnimal.execute({id});
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
    preparedGetCurrentUserState.execute({id: user.id})
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
    score,
  };
})
