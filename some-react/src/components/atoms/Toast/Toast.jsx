import { cn } from "@/utils/helpers";

const Toast = ({ message, className }) => {
  return (
    <div
      className={cn(
        `absolute top-7 left-auto mt-4 mr-4 p-2 w-max bg-red-300 text-red-800 rounded ${className}`
      )}
    >
      <span className="block w-3 h-3 rotate-45 bg-red-300 absolute -top-1 left-2" />
      {message}
    </div>
  );
};

export { Toast };
