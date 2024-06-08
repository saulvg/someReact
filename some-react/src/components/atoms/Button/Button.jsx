import { cn } from "@/utils/helpers";
import { ButtonStyles } from "./Button.styles";

const Button = ({ children, className, variant, size, onClick }) => (
  <button
    className={cn(ButtonStyles({ variant, size }), className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button };
