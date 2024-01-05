import {db} from '~/drizzle/db';
import {history, usersPublic} from "~/drizzle/schema";
import {desc, eq, sql} from "drizzle-orm";
import type {LeaderboardItem} from "~/types/game";

export default defineEventHandler(async(): Promise<LeaderboardItem[]> => {
  const data = await db.select({
    userId: history.userId,
    total: sql<number>`cast(count(${history.userId}) as int)`,
    correct: sql<number>`cast(SUM(CASE WHEN ${history.correct} THEN 1 ELSE 0 END) as int)`,
    wrong: sql<number>`cast(SUM(CASE WHEN ${history.correct} THEN 0 ELSE 1 END) as int)`,
    nickname: usersPublic.nickname,
  }).from(history).groupBy(history.userId, usersPublic.nickname, usersPublic.points).innerJoin(usersPublic, eq(history.userId, usersPublic.userId)).orderBy(desc(usersPublic.points));
  return data.map((item) => {
    return {...item, points: (item.correct * 10) - (item.wrong * 5), percentage: Math.round((item.correct / item.total) * 100)}
  })
})
