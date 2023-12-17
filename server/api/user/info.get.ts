import {serverSupabaseUser} from "#supabase/server";
import {db} from '~/drizzle/db';
import {usersPublic} from "~/drizzle/schema";
import {eq} from "drizzle-orm";

export default defineEventHandler(async(event) => {
  const query: {userId?: string} = getQuery(event);

  if(!query.userId){
    return;
  }

  const result = await db.select().from(usersPublic).where(eq(usersPublic.userId, query.userId)).limit(1);
  return result[0]
})
