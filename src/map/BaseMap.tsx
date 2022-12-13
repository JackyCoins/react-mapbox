import { FC } from "react";
import { useMapFromDI } from "./MapDIContext";

type Props = {
  name: string;
};
export const BaseMap: FC<Props> = ({ name }) => {
  const mapName = `${name}-map`;
  const mapbox = useMapFromDI(mapName);

  console.log("mapbox", mapbox);

  return <div id={mapName} />;
};
