import {z} from "zod";
import {db} from '~/drizzle/db';
import {animal, history} from "~/drizzle/schema";
import {eq, sql} from "drizzle-orm";
import {getUserFromEventToken} from "~/utils/server";

const CheckAnswerDto = z.object({
  id: z.number(),
  answer: z.string(),
})

const preparedFindAnimal = db.select().from(animal).where(eq(animal.id, sql.placeholder('id'))).limit(1).prepare('get_animal_by_id')

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
  await db
      .insert(history)
      .values({
        userId: user.id,
        animalId: foundAnimal.id,
        correct,
      })


  return {
    correct,
  };
})
