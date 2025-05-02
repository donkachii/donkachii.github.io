import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

const Button = ({
  children,
  className,
  theme = "light",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${
        theme === "light"
          ? "bg-gray-900 hover:bg-gray-800 text-white"
          : "bg-white hover:bg-gray-200 text-gray-800"
      }  font-medium py-2 px-4 rounded-md cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
