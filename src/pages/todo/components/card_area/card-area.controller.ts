import { useState } from "react";

export default function useCardAreaController() {
  const [cardCreation, setCardCreation] = useState(false);

  const handleCardCreation = () => setCardCreation((prevState) => !prevState);

  return {
    cardCreation,
    handleCardCreation,
  };
}
