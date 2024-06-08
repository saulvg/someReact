import { useState } from "react";
import { Button } from "../../atoms";
import { HiPlus } from "react-icons/hi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Button onClick={() => setCount(count + 1)}>-</Button>
      <p>{count}</p>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export { Counter };
