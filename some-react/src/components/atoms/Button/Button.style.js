import { cva } from "class-variance-authority";

export const ButtonStyle = cva("", {
  variants: {
    variant: {
      defult: "",
      secondVariant: "",
    },
  },
  size: {
    default: "",
    sm: "",
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
