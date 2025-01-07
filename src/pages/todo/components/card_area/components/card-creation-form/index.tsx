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
import useCreateTodoFormController from "./create-todo-form.controller";
import {
  CreateTodoInputType,
  EditTodoInputPartialType,
} from "./create-todo.schema";

interface Props {
  open: boolean;
  onCancel(): void;
  schema: CreateTodoInputType | EditTodoInputPartialType;
  refetch(): Promise<void>;
}

export default function CreateTodoForm({
  open,
  onCancel,
  refetch,
  schema,
}: Props) {
  const { onSubmit, errors, handleSubmit, register } =
    useCreateTodoFormController({
      refetch,
      schema,
    });

  return (
    <Modal open={open} onClose={onCancel}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white flex flex-col gap-8 rounded-lg shadow-lg p-6 w-96">
          <Typography variant="h6" component="h2" className="text-lg font-bold">
            Criar Nova Tarefa
          </Typography>

          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            className="bg-gray-50"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <FormControl fullWidth className="bg-gray-50">
            <InputLabel id="priority-label">Prioridade</InputLabel>
            <Select
              {...register("priority")}
              error={!!errors.priority}
              labelId="priority-label"
            >
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
              type="submit"
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
