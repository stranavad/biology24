import {db} from '~/drizzle/db';
import {ListGroup} from "~/types/list";

export default defineEventHandler(async(): Promise<ListGroup[]> => {
    return db.query.group.findMany({
        with: {
            animals: true
        }
    })
})
