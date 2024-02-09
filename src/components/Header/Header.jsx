import React from "react";
import { HeaderComponent, HeaderOptions } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Image from "../../micro/Image/Image.jsx";
const Header = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderOptions>
          <Text content="Prema" size="50" font="Roboto" />
          <Text content="SOBRE NÓS" size="20" font="Roboto" weight="800" />
          <Text content="SIMULADOR" size="20" font="Roboto" weight="800" />
          <Text content="VER ROTAS" size="20" font="Roboto" weight="800" />
          <Text content="CONTATO" size="20" font="Roboto" weight="800" />
        </HeaderOptions>
        <Image />
      </HeaderComponent>
    </>
  );
};

export default Header;
