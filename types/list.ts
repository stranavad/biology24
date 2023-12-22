export interface ListGroup {
    id: number;
    name: string;
    createdAt: string;
    animals:  {
      id: number;
      name: string;
      photo: string | null;
      groupId: number | null;
    }[]
}
