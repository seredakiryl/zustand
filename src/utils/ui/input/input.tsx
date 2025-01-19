import { ChangeEvent, ReactNode } from "react";

type StringListProps = {
  icon?: ReactNode;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export const Input = ({
  icon,
  placeholder,
  value,
  onChange,
  label,
}: StringListProps) => {
  return (
    <div className="flex items-center gap-2 ">
      <label>{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pl-10 text-black min-w-[300px] py-2 border border-gray-300 rounded-md focus:outline-none  "
        />
      </div>
    </div>
  );
};
