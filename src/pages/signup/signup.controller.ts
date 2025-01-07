import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchemaType } from "./signup.schema";
import useSignupService from "./signup.service";

export default function useSignUpController() {
  const { register: registerUser } = useSignupService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchemaType) => registerUser(data);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}
