import { useEffect, useState } from "react";
import {
  createTodoInputSchema,
  CreateTodoInputType,
  editodoInputPartialSchema,
  EditTodoInputPartialType,
} from "./components/card-creation-form/create-todo.schema";

export default function useCardAreaController() {
  const [cardCreation, setCardCreation] = useState(false);

  const [editTodo, setEditTodo] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [currentSchema, setCurrentSchema] = useState<
    CreateTodoInputType | EditTodoInputPartialType
  >(createTodoInputSchema);

  const handleCardCreation = () => setCardCreation((prevState) => !prevState);

  const handleEditTodo = () => setEditTodo((prevState) => !prevState);

  const handleOpenModal = () => setOpenModal((prevState) => !prevState);

  useEffect(() => {
    if (cardCreation) {
      setCurrentSchema(createTodoInputSchema);
    }
    if (editTodo) {
      setCurrentSchema(editodoInputPartialSchema);
    }
  }, [cardCreation, editTodo]);

  return {
    openModal,
    editTodo,
    currentSchema,
    handleOpenModal,
    cardCreation,
    handleCardCreation,
    handleEditTodo,
  };
}
