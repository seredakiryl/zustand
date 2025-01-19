import {
  LocationListItem,
  useLocationsStore,
} from "./store/useLocationsStore.ts";
import { ChangeEvent, useMemo } from "react";
import { QuestionIcon, ServerIcon, TrashIcon, VialIcon } from "./utils/icons";
import { EnvironmentsSelect, LocationSelect } from "./selects";
import { Input, StringList } from "./utils/ui";

export const TestLocationForm = ({
  location,
  index,
}: {
  location: LocationListItem;
  index: number;
}) => {
  const {
    locations,
    environments,
    deleteLocationItem,
    changeHelper,
    changeLocation,
    changeEnvironment,
    servers,
  } = useLocationsStore();

  const onChangeHelperHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeHelper(location.id, event.currentTarget.value);
  };

  const onChangeLocationHandler = (locationID: number) => {
    changeLocation(location.id, locationID);
  };

  const onChangeEnvironmentHandler = (environmentID: number) => {
    changeEnvironment(location.id, environmentID);
  };

  const filteredServerNamesByLocationId = useMemo(() => {
    return servers
      .filter((item) => item.locationID === location.locationID)
      .map((item) => item.name);
  }, [servers, location.locationID]);

  return (
    <div className="w-full gap-3">
      <div className="flex justify-between mb-6 ">
        <div className="flex items-center gap-4 text-2xl font-semibold">
          <VialIcon /> Тестовая локация {index}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            deleteLocationItem(location.id);
          }}
        >
          <TrashIcon />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 w-full mb-4">
        <LocationSelect
          locations={locations}
          currentLocationId={location.locationID}
          onChange={onChangeLocationHandler}
        />
        <EnvironmentsSelect
          onChange={onChangeEnvironmentHandler}
          environments={environments}
          currentEnvironmentId={location.environmentID}
        />
        <StringList
          strings={filteredServerNamesByLocationId}
          icon={<ServerIcon />}
        />
      </div>
      <Input
        label="Подсказка"
        placeholder="Комментарий по локации"
        value={location.helper}
        onChange={onChangeHelperHandler}
        icon={<QuestionIcon />}
      />
    </div>
  );
};
