import {
  Counter,
  FormUserName,
  ApiAnswerCall,
  SwapColorTitle,
  Timer,
} from "@/components";

const PageOne = () => {
  return (
    <>
      <Counter />
      <FormUserName />
      <ApiAnswerCall url="https://rickandmortyapi.com/api/character" />
      <SwapColorTitle />
      <Timer />
    </>
  );
};

export { PageOne };
