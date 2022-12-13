import { BaseMap } from "../map/BaseMap";
import React from "react";
import { Link } from "react-router-dom";

export const SimpleMap = () => {
  return (
    <div>
      <Link to={"/"}>Click</Link>
      <BaseMap name={"simple"} />
    </div>
  );
};
