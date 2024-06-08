import { useState } from "react";
import { Button } from "../../atoms";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>-</Button>
      <p>{count}</p>
      <Button>+</Button>
    </div>
  );
};

export { Counter };
