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
    <div className="flex items-center justify-center flex-wrap pt-28 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 bg-white pb-20">
        <CardCreation onClick={handleCardCreation} />
        {todos.map((todo) => (
          <Card refetch={refetch} key={todo.id} todo={todo}  />
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
