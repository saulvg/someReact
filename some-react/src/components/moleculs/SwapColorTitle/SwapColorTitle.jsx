import { Button, Title } from "../../atoms";

const SwapColorTitle = () => {
  return (
    <div className="container">
      <Title level="h2" className="text-3xl">
        Swap color title {"=>"} useContext
      </Title>

      <div className="mt-4 mx-auto w-fit [&>*]:mr-4">
        <Button>
          Swap color to <span>Orange</span>
        </Button>
        <Button>
          Swap color to <span>Black</span>
        </Button>
      </div>
    </div>
  );
};

export { SwapColorTitle };
