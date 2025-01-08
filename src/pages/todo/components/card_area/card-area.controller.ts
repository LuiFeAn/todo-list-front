import { useState } from "react";

export default function useCardAreaController() {
  const [cardCreation, setCardCreation] = useState(false);

  const [editTodo, setEditTodo] = useState(false);

  const handleCardCreation = () => setCardCreation((prevState) => !prevState);

  const handleEditTodo = () => setEditTodo((prevState) => !prevState);

  return {
    editTodo,
    cardCreation,
    handleCardCreation,
    handleEditTodo,
  };
}
