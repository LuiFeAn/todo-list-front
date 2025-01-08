import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface Props {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoFilters({ handleSearch }: Props) {
  return (
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
  );
}
