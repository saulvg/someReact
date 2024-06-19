import { cn } from "@/utils/helpers";
import { ButtonStyles } from "./Button.styles";

const Button = ({ children, className, variant, size, onClick, ...props }) => (
  <button
    className={cn(ButtonStyles({ variant, size }), className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export { Button };
