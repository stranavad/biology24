import {db} from '~/drizzle/db';
import {history, usersPublic} from "~/drizzle/schema";
import {desc, eq, sql} from "drizzle-orm";
import type {LeaderboardItem} from "~/types/game";

export default defineEventHandler(async(event): Promise<LeaderboardItem[]> => {
  return db.select({
    userId: history.userId,
    total: sql<number>`cast(count(${history.userId}) as int)`,
    correct: sql`cast(SUM(CASE WHEN ${history.correct} THEN 1 ELSE 0 END) as int)`,
    wrong: sql`cast(SUM(CASE WHEN ${history.correct} THEN 0 ELSE 1 END) as int)`,
    percentage: sql`cast(ROUND((SUM(CASE WHEN ${history.correct} THEN 1 ELSE 0 END) :: decimal / COUNT(${history.userId}) :: decimal) * 100) as int)`,
    nickname: usersPublic.nickname,
    points: usersPublic.points
  }).from(history).groupBy(history.userId, usersPublic.nickname, usersPublic.points).innerJoin(usersPublic, eq(history.userId, usersPublic.userId)).orderBy(desc(usersPublic.points));
})
