import { cva } from "class-variance-authority";

export const ButtonStyles = cva("", {
  variants: {
    variant: {
      default: "border rounded border-black/80 px-4 py-1",
      secondVariant: "",
    },
    size: {
      default: "",
      sm: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
