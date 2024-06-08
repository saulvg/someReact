import { cn } from "@/utils/helpers";

import { Button, Toast } from "../../index";

const ToastButton = ({
  children,
  onClick,
  open = false,
  message = "Some error",
  className,
}) => {
  return (
    <div className={cn(`relative ${className}`)}>
      <Button onClick={onClick}>{children}</Button>
      {!!open && <Toast message={message} />}
    </div>
  );
};

export { ToastButton };
