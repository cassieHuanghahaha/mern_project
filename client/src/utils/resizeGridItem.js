import React from "react";
import ReactDOM from "react-dom";
import Posts from "../components/posts/Posts";

const resizeGridItem = item => {
  grid = ReactDOM.findDOMNode(Posts).getElementsByClassName("grid")[0];
  console.log(grid);
  // grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
};

export default resizeGridItem;
