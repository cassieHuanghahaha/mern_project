import React from "react";
import resizeGridItem from "./resizeGridItem";
import Posts from "../components/posts/Posts";

const resizeAllGridItems = () => {
  allItems = ReactDOM.findDOMNode(Posts).getElementsByClassName("item");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
};

export default resizeAllGridItems;
