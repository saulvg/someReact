import {
  Counter,
  FormUserName,
  ApiAnswerCall,
  SwapColorTitle,
} from "@/components";

const PageOne = () => {
  return (
    <>
      <Counter />
      <FormUserName />
      <ApiAnswerCall url="https://rickandmortyapi.com/api/character" />
      <SwapColorTitle />
    </>
  );
};

export { PageOne };
