import {serverSupabaseUser} from "#supabase/server";
import {db} from '~/drizzle/db';
import {usersPublic} from "~/drizzle/schema";
import {eq, sql} from "drizzle-orm";
import {UserInfo} from "~/types/user";

const userInfoPrepared = db.select().from(usersPublic).where(eq(usersPublic.userId, sql.placeholder('id'))).limit(1).prepare('get_user_by_id_for_info')

export default defineEventHandler(async(event): Promise<UserInfo | undefined> => {
  const query: {userId?: string} = getQuery(event);

  if(!query.userId){
    return;
  }

  const result = await userInfoPrepared.execute({id: query.userId});
  return result[0]
})
