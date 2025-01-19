import { useMemo } from "react";
import { Location } from "../store/useLocationsStore.ts";
import { LocationIcon } from "../utils/icons";
import { CustomSelect } from "../utils/ui";

type locationSelectProps = {
  locations: Location[];
  currentLocationId: number | null;
  onChange: (locationID: number) => void;
};

export const LocationSelect = ({
  locations,
  currentLocationId,
  onChange,
}: locationSelectProps) => {
  const options = useMemo(() => {
    return locations?.map((element) => ({
      label: element.name,
      value: element.locationID,
    }));
  }, [locations]);

  const currentLocation = options.find(
    (item) => item.value === currentLocationId,
  );

  return (
    <CustomSelect
      currentItem={currentLocation}
      className="gap-6"
      label="Локация"
      placeholder="Выберите локацию"
      options={options}
      onChange={onChange}
      icon={<LocationIcon />}
    />
  );
};
