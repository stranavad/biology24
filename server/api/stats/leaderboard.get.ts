import {db} from '~/drizzle/db';
import {history, usersPublic} from "~/drizzle/schema";
import {desc, eq, sql} from "drizzle-orm";
import type {LeaderboardItem} from "~/types/game";

export default defineEventHandler(async(): Promise<LeaderboardItem[]> => {
  const data = await db.select({
    userId: history.userId,
    correct: sql<number>`cast(SUM(CASE WHEN ${history.correct} THEN 1 ELSE 0 END) as int)`,
    wrong: sql<number>`cast(SUM(CASE WHEN ${history.correct} THEN 0 ELSE 1 END) as int)`,
    nickname: usersPublic.nickname,
  }).from(history).groupBy(history.userId, usersPublic.nickname, usersPublic.points).innerJoin(usersPublic, eq(history.userId, usersPublic.userId));
  return data.map((item) => {
    const total = item.correct + item.wrong;
    return {...item, total, points: (item.correct * 10) - (item.wrong * 5) + 100, percentage: Math.round((item.correct / total) * 100)}
  }).sort((a, b) => b.points - a.points)
})
