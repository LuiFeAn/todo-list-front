import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchemaType } from "./signup.schema";
import useSignupService from "./signup.service";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useSignUpController() {
  const { register: registerUser } = useSignupService();

  const Nav = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      await registerUser(data);
      reset();
      Nav("/");
      toast.success("Registrado com Sucesso!");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      }
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}
