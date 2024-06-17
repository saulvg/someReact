import { useContext } from "react";
import { titleColorContext } from "../../../hooks/useAppContext";
import { Button, Title } from "../../atoms";
import { cn } from "@/utils/helpers";

const SwapColorTitle = () => {
  const { titleColor, setTitleColor } = useContext(titleColorContext);

  const changeColorToOrange = () => {
    setTitleColor("bg-orange-500/70 rounded-md w-fit px-2");
  };

  const changeColorToBlack = () => {
    setTitleColor("bg-black/70 rounded-md w-fit px-2");
  };

  const resetBackground = () => {
    setTitleColor("");
  };

  return (
    <div className="container mt-4">
      <Title level="h2" className={cn(`text-3xl ${titleColor}`)}>
        Swap color title {"=>"} useContext
      </Title>

      <div className="mt-4 mx-auto w-fit [&>*]:mr-4">
        <Button onClick={changeColorToOrange}>
          Swap color to{" "}
          <span className="text-white bg-orange-500/70 px-1 rounded-md">
            Orange
          </span>
        </Button>
        <Button onClick={changeColorToBlack}>
          Swap color to{" "}
          <span className="text-white bg-black/70 px-1 rounded-md">Black</span>
        </Button>
        <Button onClick={resetBackground}>
          Swap color to <span>Reset</span>
        </Button>
      </div>
    </div>
  );
};

export { SwapColorTitle };
