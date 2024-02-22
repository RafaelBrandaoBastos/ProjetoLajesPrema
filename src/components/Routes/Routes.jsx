import React from "react";
import { AboutComponent, AboutContainer } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Title from "../../micro/Title/Title.jsx";
import Image from "../../micro/Image/Image.jsx";

const About = () => {
  return (
    <AboutComponent>
      <Text content="SOBRE NÓS" size="40" font="Roboto" width="40%" />
      <AboutContainer>
        <Title content="Compromisso" font="Roboto" />
        <Text
          content="Especializados no calculo e produção de vigotas treliçadas para lajes com enchimento de EPS(Isopor), fazemos o cálculo de forma equalizada para economia, praticidade mas sempre preocupados com sua segurança e de sua família."
          font="Roboto"
          maxWidth="50%"
        />
        <Image width="50%" />
      </AboutContainer>

      <AboutContainer>
        <Title content="Atendimento" font="Roboto" />
        <Text
          content="Usamos conceitos atuais para atender ao cliente de forma ágil, facilitando as formas de pagamento, fornecendo todas as informações necessárias para uma compra satisfatória e consciente."
          font="Roboto"
          maxWidth="50%"
        />
        <Image width="50%" />
      </AboutContainer>

      <AboutContainer>
        <Title content="Qualidade" font="Roboto" />
        <Text
          content="Nossa missão é levar até você produtos de qualidade, confiáveis, práticos, econômicos, com atendimento dinâmico e eficiente."
          font="Roboto"
          maxWidth="50%"
        />
        <Image width="50%" />
      </AboutContainer>
    </AboutComponent>
  );
};

export default About;
