//import { Label } from "../atoms/Label/Label";
import { Input, Label } from "../../index";

const InputFields = ({
  labelName,
  className,
  inputFieldId,
  type,
  value,
  onChange,
  placeholder,
}) => (
  <div className={className}>
    <Label htmlFor={inputFieldId}>{labelName}</Label>
    <Input
      id={inputFieldId}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);
export { InputFields };
