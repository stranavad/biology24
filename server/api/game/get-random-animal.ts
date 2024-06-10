import {db} from '~/drizzle/db';
import {animal} from "~/drizzle/schema";
import {and, eq, ne, sql} from "drizzle-orm";
import {getRandomElements, shuffle} from "~/utils";
import {AnimalItem} from "~/types/game";

const preparedQuery = db.select().from(animal).where(and(ne(animal.id, sql.placeholder('id')), eq(animal.version, sql.placeholder('version')))).prepare('get_animals_without_id')


export default defineEventHandler(async(event): Promise<AnimalItem | null> => {
  const query: {lastId?: string, version: string} = getQuery(event);
  const versionNumber = Number(query.version)
  const animals = await preparedQuery.execute({id: query.lastId ? Number(query.lastId) : 0, version: isNaN(versionNumber) ? 1 : versionNumber,});
  const randomAnimal = getRandomElements(animals, 1)[0];

  const answerResults = getRandomElements(animals.reduce((results: string[], item) => {
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
