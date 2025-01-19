import { useMemo } from "react";
import { Environment } from "../store/useLocationsStore.ts";
import { LeafIcon } from "../utils/icons";
import { CustomSelect } from "../utils/ui";

type EnvironmentsSelectProps = {
  environments: Environment[];
  currentEnvironmentId: number | null;
  onChange: (environmentID: number) => void;
};

export const EnvironmentsSelect = ({
  environments,
  currentEnvironmentId,
  onChange,
}: EnvironmentsSelectProps) => {
  const options = useMemo(() => {
    return environments.map((element) => ({
      label: element.name,
      value: element.environmentID,
    }));
  }, [environments]);

  const currentEnvironment = options.find(
    (item) => item.value === currentEnvironmentId,
  );

  return (
    <CustomSelect
      onChange={onChange}
      currentItem={currentEnvironment}
      placeholder="Выберите среду"
      label="Среда"
      options={options}
      icon={<LeafIcon />}
    />
  );
};
