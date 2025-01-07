import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useLoginController from "./login.controller";

export default function Login() {
  const { errors, handleSubmit, onSubmit, register } = useLoginController();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-10 flex flex-col gap-6 mb-20"
      >
        <h1 className="text-3xl font-bold text-start  text-gray-800">Login</h1>
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          className="bg-gray-50"
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          className="bg-gray-50"
        />
        <Button
          variant="contained"
          disabled={!!errors.password || !!errors.email}
          color="primary"
          type="submit"
          size="large"
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 !text-white !py-3 !text-lg"
        >
          Acessar
        </Button>
        <Link to={"signup"}>Cadastre-se</Link>
      </form>
    </div>
  );
}
