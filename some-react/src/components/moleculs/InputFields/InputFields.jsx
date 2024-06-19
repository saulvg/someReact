import { forwardRef } from "react";
import { Input, Label } from "../../index";

const InputFields = forwardRef(
  ({ labelName, inputFieldId, className, ...props }, ref) => (
    <div className={className}>
      <Label htmlFor={inputFieldId}>{labelName}</Label>
      <Input id={inputFieldId} {...props} ref={ref} />
    </div>
  )
);

export { InputFields };
