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
  const {
    handleCardCreation,
    handleEditTodo,
    handleOpenModal,
    editTodo,
    cardCreation,
    openModal,
    currentSchema,
  } = useCardAreaController();

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
              handleEditTodo();
              handleOpenModal();
            }}
          />
          {todos.map((todo) => (
            <Card
              onClick={() => {
                handleOpenModal();
                handleCardCreation();
                handleEditTodo();
              }}
              refetch={refetch}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
        <CreateTodoForm
          edit={editTodo}
          create={cardCreation}
          schema={currentSchema}
          refetch={refetch}
          open={openModal}
          onCancel={handleOpenModal}
        />
      </div>
    </div>
  );
}
