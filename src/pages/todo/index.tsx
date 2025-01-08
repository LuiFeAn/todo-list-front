import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useTodoController from "./todo.controller";
import CardArea from "./components/card_area";

export default function Todos() {
  const { todos, refetch, handleSearch } = useTodoController();

  return (
    <div className="h-screen scroll-smooth ">
      <div className="pl-10 flex gap-5">
        <TextField
          onChange={handleSearch}
          placeholder="Nome, descrição"
          label="Pesquisar"
          variant="outlined"
          className="bg-gray-50 lg:w-[20%] sm:w-[50%]"
        />
        <FormControl className="bg-gray-50 w-[10%]">
          <InputLabel id="priority-label">Prioridade</InputLabel>
          <Select labelId="priority-label">
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="bg-gray-50 w-[10%]">
          <InputLabel id="priority-label">Conclusão</InputLabel>
          <Select labelId="priority-label">
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CardArea refetch={refetch} todos={todos} />
    </div>
  );
}
