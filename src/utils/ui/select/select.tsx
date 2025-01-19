import Select, { GroupBase, StylesConfig } from "react-select";
import { OptionType } from "./types.ts";
import { Control } from "./control.tsx";

const customStyles: StylesConfig<OptionType> = {
  control: (base) => ({
    ...base,
    width: "300px",
  }),
};

type CustomSelectProps = {
  label: string;
  options: OptionType[];
  icon: React.ReactNode;
  className?: string;
  placeholder?: string;
  currentItem?: OptionType;
  onChange: (id: number) => void;
};

export const CustomSelect = ({
  options,
  label,
  icon,
  className,
  placeholder,
  currentItem,
  onChange,
}: CustomSelectProps) => {
  return (
    <div className={`flex  items-center gap-2  ${className}`}>
      <label>{label}</label>
      <Select<OptionType, false, GroupBase<OptionType>>
        value={currentItem}
        options={options}
        onChange={(value) => {
          onChange(value!.value);
        }}
        className="text-black"
        styles={customStyles}
        placeholder={placeholder}
        components={{
          Control: (controlProps) => <Control {...controlProps} icon={icon} />,
        }}
      />
    </div>
  );
};
