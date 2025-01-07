import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-10 flex flex-col gap-6 mb-20">
        <h1 className="text-3xl font-bold text-start  text-gray-800">Login</h1>
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          className="bg-gray-50"
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          className="bg-gray-50"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 !text-white !py-3 !text-lg"
        >
          Acessar
        </Button>
        <Link to={'signup'}>Cadastre-se</Link>
      </div>
    </div>
  );
}
