import { useEffect, useRef } from "react";
import { MapAdapter } from "./MapAdapter";
import type { Map as Mapbox } from "mapbox-gl";

export const BaseMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapAdapterRef = useRef<Mapbox>();

  const createMapAdapter = async () => {
    if (containerRef.current) {
      mapAdapterRef.current = await new MapAdapter().init(containerRef.current);
    }
  };

  useEffect(() => {
    createMapAdapter();

    return () => {
      mapAdapterRef.current?.remove();
    };
  }, []);

  return <div ref={containerRef} />;
};
