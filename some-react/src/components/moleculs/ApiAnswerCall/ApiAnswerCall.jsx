import { useContext } from "react";
import { Button, Title } from "../../index";
import { useApiAnswerCall } from "./useApiAnswerCall";
import { cn } from "@/utils/helpers";
import { titleColorContext } from "../../../hooks/useAppContext";

const ApiAnswerCall = ({ url }) => {
  const { handleClick } = useApiAnswerCall(url);
  const { titleColor } = useContext(titleColorContext);

  return (
    <div className="container">
      <Title level="h2" className={cn(`text-3xl ${titleColor}`)}>
        Api fetch {"=>"} useEffect
      </Title>
      <div className="mt-8 container">
        <Button onClick={handleClick}>Log fetch results</Button>
      </div>
    </div>
  );
};

export { ApiAnswerCall };
