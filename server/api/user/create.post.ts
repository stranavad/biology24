import {z} from 'zod';
import {db} from "~/drizzle/db";
import {usersPublic} from "~/drizzle/schema";
import {serverSupabaseClient, serverSupabaseUser} from "@nuxtjs/supabase/dist/runtime/server/services";

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
    
    await db.insert(usersPublic).values({
        userId: user.id,
        points: 100,
        nickname: data.nickname
    })
})