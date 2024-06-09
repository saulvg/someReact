import { Counter, FormUserName, ApiAnswerCall } from "@/components";

const PageOne = () => {
  return (
    <>
      <Counter />
      <FormUserName />
      <ApiAnswerCall url="https://rickandmortyapi.com/api/character" />
    </>
  );
};

export { PageOne };
