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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-[80%] pb-20">
        <CardCreation onClick={handleCardCreation} />
        {todos.map((todo) => (
          <Card refetch={refetch} key={todo.id} todo={todo} />
        ))}
      </div>
      <CreateTodoForm
        refetch={refetch}
        open={cardCreation}
        onCancel={handleCardCreation}
      />
    </div>
  );
}
