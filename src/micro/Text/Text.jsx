import React from "react";
import { TextComponent } from "./style.js";
import "./style.js";

const Text = (props) => {
  return (
    <>
      <TextComponent size={props.size} font={props.font} weight={props.weight}>
        {props.content}
      </TextComponent>
    </>
  );
};

export default Text;
