import React from "react";
import resizeGridItem from "./resizeGridItem";

const resizeInstance = instance => {
  item = instance.elements[0];
  resizeGridItem(item);
};

export default resizeInstance;
