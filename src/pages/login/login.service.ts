import { todoApi } from "../../api";
import { LoginSchemaType } from "./login.schema";

export interface IUserAuthentication {
  user: {
    username: string;
    email: string;
  };
  accessToken: string;
}

export default function useLoginService() {
  async function authentication(data: LoginSchemaType) {
    await todoApi.post<IUserAuthentication>("/auth/login", data);
  }

  return {
    authentication,
  };
}
