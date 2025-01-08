import { useState } from "react";
import { ITodo } from "../../todo.service.interfaces";

export default function useCardAreaController() {
  const [selectedTodo, setSelectedTodo] = useState<ITodo>();

  const [cardCreation, setCardCreation] = useState(false);

  const [editTodo, setEditTodo] = useState(false);

  const handleCardCreation = () => setCardCreation((prevState) => !prevState);

  const handleEditTodo = () => setEditTodo((prevState) => !prevState);

  const handleCurrentTodo = (todo: ITodo) => setSelectedTodo(todo);

  return {
    editTodo,
    cardCreation,
    handleCardCreation,
    handleCurrentTodo,
    selectedTodo,
    handleEditTodo,
  };
}
