import { PriorityEnum } from "../../../../todo.service.interfaces";

export default function useCardController() {
  function handleCardColor(priority: PriorityEnum) {
    const priorityLiterals = {
      [PriorityEnum.High]: "bg-orange-600",
      [PriorityEnum.Medium]: "bg-yellow-500",
      [PriorityEnum.Low]: "bg-green-400",
    };
    return priorityLiterals[priority];
  }

  return {
    handleCardColor,
  };
}
