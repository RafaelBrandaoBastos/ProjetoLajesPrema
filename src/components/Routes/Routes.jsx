import React from "react";
import {
  RoutesComponent,
  RoutesContainer,
  HoursContainer,
  InfoContainer,
} from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Title from "../../micro/Title/Title.jsx";
import Iframe from "../../micro/Iframe/Iframe.jsx";

const Routes = () => {
  return (
    <RoutesComponent>
      <Text content="ENTRAR EM CONTATO" size="40" font="Roboto" width="40%" />
      <RoutesContainer>
        <InfoContainer>
          <Text content="Endereço" font="Roboto" size="30px" width="100%" />
          <Text
            content="Rua Presidente Vargas, 1454 - Guarujá Mansões  Betim - MG 32603-236 Brasil"
            font="Roboto"
            size="30px"
            width="100%"
          />
          <Text content="Telefone" font="Roboto" size="30px" width="100%" />
          <Text
            content="(31) 99781-5227"
            font="Roboto"
            size="30px"
            width="100%"
          />
          <Text
            content="Horário de funcionamento"
            font="Roboto"
            size="30px"
            width="100%"
          />
          <HoursContainer>
            <Text
              content="seg: ter: qua: qui: sex: sab: dom:"
              font="Roboto"
              size="30px"
              width="50px"
            />
            <Text
              content="07:00 – 17:00 07:00 – 17:00 07:00 – 17:00 07:00 – 17:00 07:00 – 17:00 07:00 – 17:00 07:00 – 17:00"
              font="Roboto"
              size="30px"
              width="250px"
            />
          </HoursContainer>
        </InfoContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3750.130561099086!2d-44.2207351!3d-19.9610108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68da4d7b9c503%3A0xf1dedcabd16384f0!2sPrema%20Mat.%20Constru%C3%A7%C3%A3o%20Lajes%20Escoras%20F.%20Armada!5e0!3m2!1spt-BR!2sbr!4v1708624100154!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </RoutesContainer>
    </RoutesComponent>
  );
};

export default Routes;
