import { ITodo } from "../../todo.service.interfaces";
import Card from "../card";

interface Props {
  todos: ITodo[];
}

export default function CardArea({ todos }: Props) {
  return (
    <div className="flex  items-center justify-center flex-wrap pt-28">
      <div className="flex flex-col lg:flex-row justify-center gap-20 w-[80%]">
        {todos.map((todo) => (
          <Card todo={todo} />
        ))}
      </div>
    </div>
  );
}
