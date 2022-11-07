// import React from "react";

import HomeGallery from "./HomeGallery";
import data from "../data.json";

function CardInfo() {
  return <>{<HomeGallery data={data.eBooks} />}</>;
}

export default CardInfo;
