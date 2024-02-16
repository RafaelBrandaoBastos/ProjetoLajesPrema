import React from "react";
import { TitleComponent } from "./style.js";
import "./style.js";

const Title = (props) => {
  return (
    <>
      <TitleComponent
        size={props.size}
        font={props.font}
        width={props.width}
        maxWidth={props.maxWidth}
      >
        {props.content}
      </TitleComponent>
    </>
  );
};

export default Title;
