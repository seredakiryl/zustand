import { create } from "zustand";
import { sleep } from "../utils/sleep";
import { persist } from "zustand/middleware";

export interface Location {
  locationID: number;
  name: string;
}

export interface Environment {
  environmentID: number;
  name: string;
}

export interface Server {
  serverID: number;
  name: string;
  locationID: number;
  environmentID: number;
}

export interface LocationListItem {
  id: number;
  locationID: number | null;
  environmentID: number | null;
  helper: string;
}

export interface LocationsStore {
  isLoaded: boolean;
  locations: Location[];
  environments: Environment[];
  servers: Server[];
  fetch: () => Promise<void>;
  locationsList: LocationListItem[];
  addNewLocationItem: () => void;
  deleteLocationItem: (id: number) => void;
  changeHelper: (id: number, newValue: string) => void;
  changeLocation: (idItem: number, locationID: number) => void;
  changeEnvironment: (idItem: number, environmentID: number) => void;
}

const newLocationItem = {
  locationID: null,
  environmentID: null,
  hint: "",
};

export const useLocationsStore = create(
  persist<LocationsStore>(
    (set) => {
      const fetch = async () => {
        set((state) => ({
          ...state,
          isLoaded: true,
        }));
        await sleep(1500);

        const { default: data } = await import("./data.json");
        set({
          ...data,
          isLoaded: false,
        });
      };

      const addNewLocationItem = () => {
        set((state) => ({
          ...state,
          locationsList: [
            ...state.locationsList,
            {
              ...newLocationItem,
              id: Date.now(),
            },
          ],
        }));
      };

      const deleteLocationItem = (id: number) => {
        set((state) => ({
          ...state,
          locationsList: state.locationsList.filter((item) => item.id !== id),
        }));
      };

      const changeHelper = (id: number, newValue: string) => {
        set((state) => ({
          ...state,
          locationsList: state.locationsList.map((item) =>
            item.id !== id ? item : { ...item, helper: newValue },
          ),
        }));
      };

      const changeLocation = (idItem: number, locationID: number) => {
        set((state) => ({
          ...state,
          locationsList: state.locationsList.map((item) =>
            item.id !== idItem ? item : { ...item, locationID },
          ),
        }));
      };

      const changeEnvironment = (idItem: number, environmentID: number) => {
        set((state) => ({
          ...state,
          locationsList: state.locationsList.map((item) =>
            item.id !== idItem ? item : { ...item, environmentID },
          ),
        }));
      };

      return {
        isLoaded: false,
        locations: [],
        environments: [],
        servers: [],
        locationsList: [{ ...newLocationItem, id: Date.now() }],
        fetch,
        addNewLocationItem,
        deleteLocationItem,
        changeHelper,
        changeLocation,
        changeEnvironment,
      };
    },
    {
      name: "locations",
    },
  ),
);
