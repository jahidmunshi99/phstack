"use client";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`text-sm rounded border border-gray-300 px-3 py-2 hover:bg-slate-100 cursor-pointer transition duration-300 smooth ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
