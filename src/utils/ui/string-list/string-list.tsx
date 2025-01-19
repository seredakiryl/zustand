import { ReactNode } from "react";

type StringListProps = {
  strings: string[];
  icon?: ReactNode;
};

export const StringList = ({ strings, icon }: StringListProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon ?? icon}
      <div>{strings.length > 0 ? strings.join(", ") : "Нет данных"}</div>
    </div>
  );
};
