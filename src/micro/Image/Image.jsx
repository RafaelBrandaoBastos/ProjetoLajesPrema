import React from "react";
import { ImageComponent } from "./style.js";
import "./style.js";

const Image = (props) => {
  return (
    <>
      <ImageComponent
        src={props.content}
        maxWidth={props.maxWidth}
        maxHeight={props.maxHeight}
        width={props.width}
      />
    </>
  );
};

export default Image;
