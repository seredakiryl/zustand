import { useLocationsStore } from "./store/useLocationsStore.ts";
import { useEffect } from "react";
import { Button } from "./utils/ui";
import { PlusIcon } from "./utils/icons";
import { TestLocationForm } from "./test-location-form.tsx";

export const TestLocationsList = () => {
  const { isLoaded, locationsList, fetch, addNewLocationItem } =
    useLocationsStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (isLoaded) {
    return <div className="flex justify-center">Загрузка</div>;
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border-[1px] border-strokeDark bg-blockBackground p-5">
      <div className="flex flex-col items-center gap-5">
        {locationsList.map((location, index) => (
          <TestLocationForm
            key={location.id}
            index={index + 1}
            location={location}
          />
        ))}
      </div>
      <div className="flex justify-end gap-6 mt-6">
        <Button
          onClick={() => console.log(locationsList)}
          name="Вывести результат в консоль"
          className="border border-lightBlue px-4 py-2"
        />
        <Button
          className="border border-lightBlue text-lightBlue px-4 py-2"
          onClick={addNewLocationItem}
          icon={<PlusIcon />}
          name="Добавить тестовую локацию"
        />
      </div>
    </div>
  );
};
