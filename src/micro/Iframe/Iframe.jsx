import React from "react";
import { IframeComponent } from "./style.js";
import "./style.js";

const Iframe = (props) => {
  return (
    <>
      <IframeComponent
        src={props.content}
        maxWidth={props.maxWidth}
        maxHeight={props.maxHeight}
        width={props.width}
        height={props.height}
      />
    </>
  );
};

export default Iframe;
