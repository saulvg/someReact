import { Button, Title } from "../../index";
import { useApiAnswerCall } from "./useApiAnswerCall";

const ApiAnswerCall = ({ url }) => {
  const { handleClick } = useApiAnswerCall(url);

  return (
    <div className="container">
      <Title level="h2" className="text-3xl">
        Api fetch {"=>"} useEffect
      </Title>
      <div className="mt-8 container">
        <Button onClick={handleClick}>Log fetch results</Button>
      </div>
    </div>
  );
};

export { ApiAnswerCall };
