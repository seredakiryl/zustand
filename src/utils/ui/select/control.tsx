import { GroupBase, components, ControlProps } from "react-select";
import { OptionType } from "./types.ts";

type ControlComponentProps = ControlProps<
  OptionType,
  false,
  GroupBase<OptionType>
> & {
  icon: React.ReactNode;
};

export const Control = (props: ControlComponentProps) => {
  return (
    <components.Control {...props} className="pl-1.5">
      {props.icon}
      {props.children}
    </components.Control>
  );
};
