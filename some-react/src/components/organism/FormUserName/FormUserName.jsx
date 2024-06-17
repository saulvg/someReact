import { useContext } from "react";
import { Button, Title } from "../../atoms";
import { InputFields } from "../../moleculs";
import useFormUserName from "./useFormUserName";
import {
  titleColorContext,
  useTitleColorContext,
} from "../../../hooks/useAppContext";
import { cn } from "@/utils/helpers";

const FormUserName = () => {
  const { handlerSubmit, handleChange, username } = useFormUserName();
  //const { titleColor } = useContext(titleColorContext);
  const { titleColor } = useTitleColorContext();

  return (
    <div className="container">
      <Title level="h2" className={cn(`text-3xl ${titleColor}`)}>
        Form {"=>"} useEffect
      </Title>
      <form onSubmit={handlerSubmit} className="container">
        <InputFields
          className="w-80"
          labelName="Username"
          inputFieldId="username"
          type="text"
          placeholder="Write here ..."
          value={username}
          onChange={handleChange}
        />
        <Button className="my-2 text-sm font-medium text-gray-700">
          Submit
        </Button>
      </form>
    </div>
  );
};

export { FormUserName };
