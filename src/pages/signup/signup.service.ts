import { todoApi } from "../../@shared/api";
import { SignUpSchemaType } from "./signup.schema";

export default function useSignupService() {
  async function register(data: SignUpSchemaType) {
    await todoApi.post("/users", data);
  }

  return {
    register,
  };
}
