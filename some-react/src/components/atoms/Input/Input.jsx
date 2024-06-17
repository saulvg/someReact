const Input = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ref,
}) => {
  console.log("ref", ref);
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
    />
  );
};

export { Input };
