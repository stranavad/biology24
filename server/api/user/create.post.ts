import {z} from 'zod';
import {db} from "~/drizzle/db";
import {usersPublic} from "~/drizzle/schema";
import {serverSupabaseUser} from "#supabase/server";
import {eq} from "drizzle-orm";

const CreateUserSchema = z.object({
    nickname: z.string()
})

export default defineEventHandler(async(event) => {
    const body = await readBody(event);
    const data = CreateUserSchema.parse(body);
    const user = await serverSupabaseUser(event);

    if(!user){
        return;
    }

    // First check if user exists
    const existingUser = await db.select().from(usersPublic).where(eq(usersPublic.userId, user.id))

    if(existingUser){
        await db.update(usersPublic).set({nickname: data.nickname}).where(eq(usersPublic.userId, user.id));
        return;
    }

    await db.insert(usersPublic).values({
        userId: user.id,
        points: 100,
        nickname: data.nickname
    })
})
