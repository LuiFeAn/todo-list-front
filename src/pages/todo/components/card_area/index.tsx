import { ITodo } from "../../todo.service.interfaces";
import useCardAreaController from "./card-area.controller";
import Card from "./components/card";
import CardCreation from "./components/card-creation";
import CreateTodoForm from "./components/create-todo-form";
import EditTodoForm from "./components/edit-todo-form";
interface Props {
  todos: ITodo[];
  refetch(): Promise<void>;
}

export default function CardArea({ todos, refetch }: Props) {
  const { handleCardCreation, handleEditTodo, editTodo, cardCreation } =
    useCardAreaController();

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">
        Tarefas tão fáceis quanto grudar um Post-it! =)
      </h1>
      <div className="flex items-center justify-center flex-wrap pt-28 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 bg-white pb-20">
          <CardCreation
            onClick={() => {
              handleCardCreation();
            }}
          />
          {todos.map((todo) => (
            <Card
              onClick={() => {
                handleEditTodo();
              }}
              refetch={refetch}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
        <CreateTodoForm
          refetch={refetch}
          open={cardCreation}
          onCancel={handleCardCreation}
        />
        <EditTodoForm
          refetch={refetch}
          open={editTodo}
          onCancel={handleEditTodo}
        />
      </div>
    </div>
  );
}
