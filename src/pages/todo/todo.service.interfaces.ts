export enum PriorityEnum {
  High = "Alta",
  Medium = "Média",
  Low = "Baixa",
}

export interface ITodo {
  id: string;
  userId: string;
  title: string;
  done: boolean;
  priority: PriorityEnum;
  description: string;
  createdAt: string;
}
