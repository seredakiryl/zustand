import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  name: string;
  icon?: ReactNode;
  className?: string;
};

export const Button = ({ onClick, name, icon, className }: ButtonProps) => {
  return (
    <button
      className={`flex items-center font-semibold gap-2 ${className}`}
      type="button"
      onClick={onClick}
    >
      {icon && icon}
      {name}
    </button>
  );
};
