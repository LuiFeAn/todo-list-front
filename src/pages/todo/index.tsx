import { TextField } from "@mui/material";

export default function Todos() {
  return (
    <div>
      <div className="pl-10">
        <TextField
          label="Pesquisar"
          variant="outlined"
          className="bg-gray-50 w-[20%]"
        />
      </div>
    </div>
  );
}
