import { ChevronDown } from "lucide-react";

const Select = ({ options, label, labelKey, ...props }) => {
  return (
    <div className="relative">
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <select
        {...props}
        className="
          h-10
          w-full
          appearance-none
          rounded-lg
          border
          border-slate-300
          bg-white
          px-2
          pr-10
          text-sm
          text-slate-700
          transition
          focus:border-blue-500
          focus:outline-none
          focus:ring-4
          focus:ring-blue-100
          uppercase
        "
      >
        {options?.map((item, index) => (
          <option key={index} value={item[labelKey]}>
            {item[labelKey]}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
};

export default Select;
