import useTodoController from "./todo.controller";
import CardArea from "./components/card_area";
import TodoFilters from "./components/filters";

export default function Todos() {
  const { todos, refetch, handleSearch } = useTodoController();

  return (
    <div className="h-screen scroll-smooth ">
      <TodoFilters handleSearch={handleSearch} />
      <CardArea refetch={refetch} todos={todos} />
    </div>
  );
}
