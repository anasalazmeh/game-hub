import React from "react";
import UsePlatforms from "./UsePlatforms";

const Platform = (id?: number) => {
  const Platform = UsePlatforms();
  return Platform.data?.results.find((data) => data.id == id);
};
export default Platform;



