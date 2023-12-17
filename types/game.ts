export interface AnimalItem {
  id: number;
  photo: string | null;
  answers: string[]
}

export interface LeaderboardItem {
  userId: string;
  total: number;
  correct: number;
  wrong: number;
  percentage: number;
  nickname: string;
  points: number;
}
