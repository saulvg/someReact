const Label = ({ htmlFor, children, className }) => (
  <label
    htmlFor={htmlFor}
    className={`block mb-2 text-sm font-medium text-gray-700 ${className}`}
  >
    {children}
  </label>
);

export { Label };
