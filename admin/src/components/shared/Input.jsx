const Input = ({
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  id,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <label className="flex flex-col text-left">
      <span>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
        className={`border p-2 rounded ${className}`.trim()}
        {...props}
      />
    </label>
  );
};

export default Input;
