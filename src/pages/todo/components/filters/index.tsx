import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { useAuth } from "../../../@shared/security/auth.context";

interface Props {
  register: UseFormRegister<{
    search?: string | undefined;
    done?: string | undefined;
    priority?: string | undefined;
  }>;
}

export default function TodoFilters({ register }: Props) {
  const { logout } = useAuth();

  return (
    <div className="pl-10 flex gap-5">
      <TextField
        placeholder="Nome, descrição"
        label="Pesquisar"
        variant="outlined"
        className="bg-gray-50 lg:w-[20%] sm:w-[50%]"
        {...register("search")}
      />
      <FormControl className="bg-gray-50 w-[10%]">
        <InputLabel id="priority-label">Prioridade</InputLabel>
        <Select labelId="priority-label" {...register("priority")}>
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="Baixa">Baixa</MenuItem>
          <MenuItem value="Média">Média</MenuItem>
          <MenuItem value="Alta">Alta</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="bg-gray-50 w-[10%]">
        <InputLabel id="done-label">Conclusão</InputLabel>
        <Select labelId="done-label" {...register("done")}>
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="true">Concluídas</MenuItem>
          <MenuItem value="false">Não Concluídas</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={logout}>Sair</Button>
    </div>
  );
}
