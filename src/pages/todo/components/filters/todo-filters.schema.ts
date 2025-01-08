import { z } from "zod";

export const filterTodoSchema = z.object({
  search: z.string().optional(),
  done: z.string().optional(),
  priority: z.string().optional(),
});

export type FilterTodoSchemaType = z.infer<typeof filterTodoSchema>;
