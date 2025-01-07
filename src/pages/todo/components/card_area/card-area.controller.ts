import { useEffect, useState } from "react";
import {
  createTodoInputSchema,
  CreateTodoInputType,
  editodoInputPartialSchema,
  EditTodoInputPartialType,
} from "./components/card-creation-form/create-todo.schema";

export default function useCardAreaController() {
  const [cardCreation, setCardCreation] = useState(false);

  const [currentSchema, setCurrentSchema] = useState<
    CreateTodoInputType | EditTodoInputPartialType
  >(createTodoInputSchema);

  const [editTodo, setEditTodo] = useState(false);

  const handleCardCreation = () => setCardCreation((prevState) => !prevState);

  const handleEditTodo = () => setEditTodo((prevState) => !prevState);

  useEffect(() => {
    if (cardCreation) {
      setCurrentSchema(createTodoInputSchema);
    }
    if (editTodo) {
      setCurrentSchema(editodoInputPartialSchema);
    }
  }, [cardCreation, editTodo]);

  return {
    editTodo,
    currentSchema,
    cardCreation,
    handleCardCreation,
    handleEditTodo,
  };
}
