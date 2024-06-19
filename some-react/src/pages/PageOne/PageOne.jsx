import {
  Counter,
  FormUserName,
  ApiAnswerCall,
  SwapColorTitle,
  Timer,
  InputRef,
  Disclaimer,
} from "@/components";

const PageOne = () => {
  return (
    <>
      <Counter />
      <FormUserName />
      <ApiAnswerCall url="https://rickandmortyapi.com/api/character" />
      <SwapColorTitle />
      <InputRef />
      <Timer />
      <Disclaimer className="container">
        useCallback y useMemo tambien son muy comunes pero en rect 19 se van...{" "}
        <br />
        useCallback sirve para memorizar funciones (los set.. tambien son
        funciones) <br /> y useMemo valores memorizados, resultados de
        funciones, calculos etc...
      </Disclaimer>
      <Disclaimer className="container">Pendiente useReducer</Disclaimer>
    </>
  );
};

export { PageOne };
