import React from "react";
import { TextComponent } from "./style.js";
import "./style.js";

const Text = (props) => {
  return (
    <>
      <TextComponent
        size={props.size}
        font={props.font}
        width={props.width}
        maxWidth={props.maxWidth}
        color={props.color}
      >
        {props.content}
      </TextComponent>
    </>
  );
};

export default Text;
