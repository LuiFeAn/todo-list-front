import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./login.schema";
import useLoginService from "./login.service";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../@shared/security/auth.context";

export default function useLoginController() {
  const { authentication } = useLoginService();

  const { handleSession } = useAuth();

  const Nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const response = await authentication(data);
      handleSession(response);
      Nav("/todos");
      toast.success("Autenticado");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
