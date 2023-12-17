import {db} from '~/drizzle/db';
import {animal} from "~/drizzle/schema";
import {and, eq, ne} from "drizzle-orm";
import {getRandomElements, shuffle} from "~/utils";
import {AnimalItem} from "~/types/game";


export default defineEventHandler(async(event): Promise<AnimalItem | null> => {
  const query: {lastId?: string} = getQuery(event);
  const animals = await db.select().from(animal).where(query.lastId ? ne(animal.id, Number(query.lastId)) : undefined);
  const randomAnimal = getRandomElements(animals, 1)[0];

  const answerResults = getRandomElements(animals.filter(i => i.groupId === randomAnimal.groupId && i.id !== randomAnimal.id).map(i => i.name), 3);

  return {
    id: randomAnimal.id,
    photo_url: randomAnimal.photo,
    answers: shuffle([...answerResults, randomAnimal.name])
  }
})
