import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<{
    search?: string | undefined;
    concluslion?: string | undefined;
    priority?: string | undefined;
  }>;
}

export default function TodoFilters({ register }: Props) {
  return (
    <div className="pl-10 flex gap-5">
      <TextField
        placeholder="Nome, descrição"
        label="Pesquisar"
        variant="outlined"
        className="bg-gray-50 lg:w-[20%] sm:w-[50%]"
        {...register("search")}
      />
      <FormControl className="bg-gray-50 w-[10%]" {...register("priority")}>
        <InputLabel id="priority-label">Prioridade</InputLabel>
        <Select labelId="priority-label">
          <MenuItem value="Baixa">Baixa</MenuItem>
          <MenuItem value="Média">Média</MenuItem>
          <MenuItem value="Alta">Alta</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="bg-gray-50 w-[10%]" {...register("done")}>
        <InputLabel id="priority-label">Conclusão</InputLabel>
        <Select labelId="priority-label">
          <MenuItem value="Baixa">Baixa</MenuItem>
          <MenuItem value="Média">Média</MenuItem>
          <MenuItem value="Alta">Alta</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
