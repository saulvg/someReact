import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Ocultar el mensaje después de 3 segundos
    }
  };

  return {
    count,
    setCount,
    isOpen,
    handleDecrease,
  };
};

export default useCounter;
