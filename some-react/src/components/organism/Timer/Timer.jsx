import { Button, Disclaimer, Title } from "@/components";
import { useTitleColorContext } from "../../../hooks/useAppContext";
import { cn } from "@/utils/helpers";
import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const { titleColor } = useTitleColorContext();

  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  /* useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); */

  return (
    <div className="container">
      <Title level="h2" className={cn(`text-3xl ${titleColor}`)}>
        Timer {"=>"} useRef
      </Title>
      <div className="container w-fit mx-auto">
        <p>{time}</p>
        <div>
          <Button
            className="my-2 text-sm font-medium text-gray-700"
            onClick={() => clearInterval(intervalRef.current)}
          >
            Stop timer
          </Button>
        </div>
      </div>
      <Disclaimer>
        Este componente esta comentado para que no este contando constantemente{" "}
        {"'Timer'"}
      </Disclaimer>
    </div>
  );
};

export { Timer };
