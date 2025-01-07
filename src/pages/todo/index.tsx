import { TextField } from "@mui/material";
import useTodoController from "./todo.controller";
import CardArea from "./components/card_area";

export default function Todos() {
  const { todos } = useTodoController();

  return (
    <div>
      <div className="pl-10">
        <TextField
          placeholder="Nome, descrição"
          label="Pesquisar"
          variant="outlined"
          className="bg-gray-50 lg:w-[20%] sm:w-[50%]"
        />
      </div>
      <CardArea todos={todos} />
    </div>
  );
}
