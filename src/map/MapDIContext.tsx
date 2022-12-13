import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Mapbox } from "./types";

let mapboxgl: any;

type Context = {
  createMapbox?: (mapName: string) => Promise<Mapbox>;
};
const MapDIContext = createContext<Context>({});

const container: Record<string, Mapbox> = {};

type Props = {
  children: ReactNode;
};
export const MapDIContextProvider: FC<Props> = ({ children }) => {
  const loadMapbox = async () => {
    if (!mapboxgl) {
      mapboxgl = await import("mapbox-gl");
    }
  };

  const createMapbox = useCallback(async (mapName: string) => {
    await loadMapbox();

    if (container[mapName]) {
      return container[mapName];
    }

    const mapbox: Mapbox = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      container: mapName,
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    container[mapName] = mapbox;

    return mapbox;
  }, []);

  const value = useMemo(
    () => ({
      createMapbox,
    }),
    [createMapbox]
  );

  return (
    <MapDIContext.Provider value={value}>{children}</MapDIContext.Provider>
  );
};
export const useMapFromDI = (mapName: string): Mapbox | null => {
  const [mapbox, setMapbox] = useState<Mapbox | null>(null);
  const { createMapbox } = useContext(MapDIContext);

  const asyncCreateMapbox = async () => {
    if (createMapbox) {
      const mapbox = await createMapbox(mapName);
      setMapbox(mapbox);
    }
  };

  useEffect(() => {
    if (container[mapName]) {
      setMapbox(container[mapName]);
      return;
    }

    asyncCreateMapbox();
  }, []);

  return mapbox;
};
