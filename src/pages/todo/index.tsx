import useTodoController from "./todo.controller";
import CardArea from "./components/card_area";
import TodoFilters from "./components/filters";
import { useAuth } from "../@shared/security/auth.context";
import { Navigate } from "react-router-dom";

export default function Todos() {
  const { user } = useAuth();
  const { todos, refetch, register } = useTodoController();

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="h-screen scroll-smooth ">
      <TodoFilters register={register} />
      <CardArea refetch={refetch} todos={todos} />
    </div>
  );
}
