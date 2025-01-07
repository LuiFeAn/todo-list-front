import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useSignUpController from "./signup.controller";

export default function SignUp() {
  const { errors, handleSubmit, register, onSubmit } = useSignUpController();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-10 flex flex-col gap-6 mb-20"
      >
        <h1 className="text-3xl font-bold text-start text-gray-800">
          Cadastro
        </h1>

        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          className="bg-gray-50"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          className="bg-gray-50"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          className="bg-gray-50"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 !text-white !py-3 !text-lg"
        >
          Cadastrar
        </Button>

        <Link to={"/"} className="text-center text-blue-600">
          Voltar
        </Link>
      </form>
    </div>
  );
}
