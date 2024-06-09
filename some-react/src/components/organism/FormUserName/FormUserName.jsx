import { Button, Title } from "../../atoms";
import { InputFields } from "../../moleculs";
import useFormUserName from "./useFormUserName";

const FormUserName = () => {
  const { handlerSubmit, handleChange, username } = useFormUserName();

  return (
    <div className="container">
      <Title level="h2" className="text-3xl">
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
