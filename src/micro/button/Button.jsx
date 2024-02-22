import React from "react";
import { ButtonComponent } from "./style.js";

const Button = (props) => {
  return (
    <>
      <ButtonComponent
        maxWidth={props.maxWidth}
        maxHeight={props.maxHeight}
        textColor={props.textColor}
        backgroundColor={props.backgroundColor}
        font-family={props.maxWidth}
        font-size={props.fontSize}
        font-style={props.fontStyle}
      >
        {props.content}
      </ButtonComponent>
    </>
  );
};

export default Button;
