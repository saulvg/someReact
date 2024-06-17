import { Button, Title } from "../../atoms";
import { InputFields } from "../../moleculs";
//import useFormUserName from "./useFormUserName";
import { useTitleColorContext } from "../../../hooks/useAppContext";
import { cn } from "@/utils/helpers";
import { useRef } from "react";

const Timer = () => {
  const inputEl = useRef(null);

  const { titleColor } = useTitleColorContext();

  const onButtonClick = () => {
    console.log("soy", inputEl.current);
    inputEl.current.focus();
  };

  return (
    <div className="container">
      <Title level="h2" className={cn(`text-3xl ${titleColor}`)}>
        Input {"=>"} useRef
      </Title>
      <div className="container">
        <InputFields
          ref={inputEl}
          className="w-80"
          labelName="Username"
          inputFieldId="username"
          type="text"
          placeholder="Write here ..."
        />
        <Button
          className="my-2 text-sm font-medium text-gray-700"
          onClick={onButtonClick}
        >
          Foucs the input
        </Button>
      </div>
    </div>
  );
};

export { Timer };
