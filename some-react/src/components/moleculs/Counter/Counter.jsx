import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Title, ToastButton } from "../../index";

const Counter = () => {
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

  return (
    <div className="container">
      <Title level="h2" className="text-3xl">
        Counter
      </Title>
      <div className="bg-orange-100 w-max !mx-auto containerWithBorder">
        <div className="[&>*]:inline-block [&>*]:mx-4">
          <ToastButton
            onClick={handleDecrease}
            open={isOpen}
            message="El contador no puede ser menor que 0"
          >
            <FontAwesomeIcon icon={faMinus} />
          </ToastButton>
          <p className="text-xl font-semibold w-4 text-center">{count}</p>
          <Button onClick={() => setCount(count + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Counter };
