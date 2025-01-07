import { todoApi } from "../../api";

export interface IRegisterUserInput {
  username: string;
  email: string;
  password: string;
}

export default function useSignupService() {
  async function register(data: IRegisterUserInput) {
    await todoApi.post("/users", data);
  }

  return {
    register,
  };
}
