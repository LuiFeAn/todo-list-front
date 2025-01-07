import { ITodo } from "../../todo.service.interfaces";
import useCardAreaController from "./card-area.controller";
import Card from "./components/card";
import CardCreation from "./components/card-creation";
import CreateTodoForm from "./components/card-creation-form";
interface Props {
  todos: ITodo[];
  refetch(): Promise<void>;
}

export default function CardArea({ todos, refetch }: Props) {
  const { cardCreation, handleCardCreation } = useCardAreaController();

  return (
    <div className="flex items-center justify-center flex-wrap pt-28">
      <div className="flex flex-col lg:flex-row justify-center gap-20 w-[80%]">
        {todos.map((todo) => (
          <Card refetch={refetch} key={todo.id} todo={todo} />
        ))}
        <CardCreation onClick={handleCardCreation} />
      </div>
      <CreateTodoForm
        refetch={refetch}
        open={cardCreation}
        onCancel={handleCardCreation}
      />
    </div>
  );
}
