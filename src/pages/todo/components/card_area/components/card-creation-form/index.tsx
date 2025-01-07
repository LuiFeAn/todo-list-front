import {
  Modal,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface Props {
  open: boolean;
  onCancel(): void;
  refetch(): Promise<void>;
}

export default function CreateTodoForm({ open, onCancel, refetch }: Props) {
  return (
    <Modal open={open} onClose={onCancel}>
      <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white flex flex-col gap-8 rounded-lg shadow-lg p-6 w-96">
          <Typography variant="h6" component="h2" className="text-lg font-bold">
            Criar Nova Tarefa
          </Typography>

          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
          />

          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
          />

          <FormControl fullWidth className="bg-gray-50">
            <InputLabel id="priority-label">Prioridade</InputLabel>
            <Select labelId="priority-label">
              <MenuItem value="Baixa">Baixa</MenuItem>
              <MenuItem value="Média">Média</MenuItem>
              <MenuItem value="Alta">Alta</MenuItem>
            </Select>
          </FormControl>

          <div className="flex justify-end gap-2">
            <Button
              onClick={onCancel}
              variant="outlined"
              className="hover:bg-gray-200"
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Criar
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
