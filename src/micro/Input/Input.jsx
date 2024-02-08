import React, { } from "react";
import {Input} from "./style.js";
import "./style.js";

  const Input = () => {
    return (
      <>
        <Input
          onChange = {onChange}
          font-family = {font-family}
          text-align = {text-align}
          font-size = {font-size}
          font-style = {font-style}
          color = {color}
          line-break = {line-break}
          max-width = {max-width}
          max-height = {max-height} />
      </>
    );
  };

export default Input;
