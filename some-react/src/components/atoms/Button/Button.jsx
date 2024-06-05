import { cn } from "../../../utils/helpers";

const Button = ({ children }) => (
  <button className={cn("bg-red-200")}>{children}</button>
);

export { Button };
