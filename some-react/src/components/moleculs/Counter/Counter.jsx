import { useState } from "react";
import { Button } from "../../atoms";
import { HiPlus } from "react-icons/hi";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Button onClick={() => setCount(count + 1)}>-</Button>
      <p>{count}</p>
      <Button>
        <HiPlus />
      </Button>
    </div>
  );
};

export { Counter };
