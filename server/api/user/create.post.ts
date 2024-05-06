import {z} from 'zod';
import {db} from "~/drizzle/db";
import {usersPublic} from "~/drizzle/schema";
import {eq, sql} from "drizzle-orm";
import {getUserFromEventToken} from "~/utils/server";

const CreateUserSchema = z.object({
    nickname: z.string().max(50)
})

const preparedFindUser = db.select().from(usersPublic).where(eq(usersPublic.userId, sql.placeholder('id'))).prepare('find_user_for_create');

export default defineEventHandler(async(event) => {
    const body = await readBody(event);
    const user = await getUserFromEventToken(event);
    const data = CreateUserSchema.parse(body);

    if(!user){
        return;
    }

    // First check if user exists
    const existingUser = await preparedFindUser.execute({id: user.id})

    if(existingUser.length){
        await db.update(usersPublic).set({nickname: data.nickname}).where(eq(usersPublic.userId, user.id));
        return;
    }

    await db.insert(usersPublic).values({
        userId: user.id,
        points: 100,
        nickname: data.nickname
    })
})
