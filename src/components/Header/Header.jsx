import React from "react";
import { HeaderComponent, HeaderOptions, ContactOptions } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Image from "../../micro/Image/Image.jsx";

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderOptions>
          <Text content="Prema" size="50" font="Roboto" />
          <Text content="ORÇAMENTO" size="20" font="Roboto" weight="800" />
          <Text content="SOBRE NÓS" size="20" font="Roboto" weight="800" />
          <Text content="GALERIA" size="20" font="Roboto" weight="800" />
          <Text content="VER ROTAS" size="20" font="Roboto" weight="800" />
        </HeaderOptions>
        <ContactOptions>
          <Text content="WHATSAPP" size="20" font="Roboto" weight="800" />
          <Text content="LIGAR" size="20" font="Roboto" weight="800" />
        </ContactOptions>
      </HeaderComponent>
    </>
  );
};

export default Header;
