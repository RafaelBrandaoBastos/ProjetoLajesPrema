import React from "react";
import { BannerComponent, SimulatorContainer } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Image from "../../micro/Image/Image.jsx";
import Button from "../../micro/Button/Button.jsx";
import BannerImage from "../../assets/BannerImage.jpg";

const Banner = () => {
  return (
    <BannerComponent>
      <SimulatorContainer>
        <Text
          content="Faça Seu Orçamento Pelo Simulador"
          font="Roboto"
          maxWidth="50%"
        />
        <Button
          content="Simulador"
          backgroundColor="green"
          fontSize="30px"
          padding="100px"
          maxWidth="100px"
          maxHeight="50px"
        />
      </SimulatorContainer>
      <Image width="50%" />
    </BannerComponent>
  );
};

export default Banner;
