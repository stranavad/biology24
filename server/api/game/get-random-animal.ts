import {db} from '~/drizzle/db';
import {animal} from "~/drizzle/schema";
import {and, eq, ne, sql} from "drizzle-orm";
import {getRandomElements, shuffle} from "~/utils";
import {AnimalItem} from "~/types/game";

const preparedQuery = db.select().from(animal).where(ne(animal.id, sql.placeholder('id'))).prepare('get_animals_without_id')


export default defineEventHandler(async(event): Promise<AnimalItem | null> => {
  const query: {lastId?: string} = getQuery(event);
  const animals = await preparedQuery.execute({id: query.lastId ? Number(query.lastId) : 0});
  const randomAnimal = getRandomElements(animals, 1)[0];

  const answerResults = getRandomElements(animals.reduce((results, item) => {
    if (item.groupId === randomAnimal.groupId && item.id !== randomAnimal.id) {
      results.push(item.name);
    }
    return results;
  }, []), 3);

  return {
    id: randomAnimal.id,
    photo: randomAnimal.photo,
    answers: shuffle([...answerResults, randomAnimal.name])
  }
})
