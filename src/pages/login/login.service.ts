import { todoApi } from "../../api";
import { LoginSchemaType } from "./login.schema";
import { IUserSession } from "./login.service.interfaces";

export default function useLoginService() {
  async function authentication(data: LoginSchemaType) {
    const response = await todoApi.post<IUserSession>("/auth/login", data);
    return response.data;
  }

  return {
    authentication,
  };
}
