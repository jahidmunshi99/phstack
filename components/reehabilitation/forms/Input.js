const Input = ({ label, value = "", type = "text", ...props }) => {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        {...props}
        type={type}
        defaultValue={value}
        className="w-full rounded-lg border border-slate-300 p-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default Input;
