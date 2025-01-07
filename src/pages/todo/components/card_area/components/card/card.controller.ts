import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import { PriorityEnum } from "../../../../todo.service.interfaces";

interface Props {
  refetch(): Promise<void>;
}

export default function useCardController({ refetch }: Props) {
  const { del } = useTodoService();

  function handleCardColor(priority: PriorityEnum) {
    const priorityLiterals = {
      [PriorityEnum.High]: "bg-orange-600",
      [PriorityEnum.Medium]: "bg-yellow-500",
      [PriorityEnum.Low]: "bg-green-400",
    };
    return priorityLiterals[priority];
  }

  async function handleCardDel(id: string) {
    try {
      await del(id);
      await refetch();
      toast.success("Tarefa deletada");
    } catch {
      toast.error("Não foi possível deletar esta tarefa");
    }
  }

  return {
    handleCardColor,
    handleCardDel,
  };
}
