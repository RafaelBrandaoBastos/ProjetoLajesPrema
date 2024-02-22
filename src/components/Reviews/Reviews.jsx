import React from "react";
import {
  ReviewsComponent,
  ReviewsContainer,
  ReviewContainer,
} from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Title from "../../micro/Title/Title.jsx";
import Image from "../../micro/Image/Image.jsx";
import Button from "../../micro/Button/Button.jsx";

const Reviews = () => {
  return (
    <ReviewsComponent>
      <Text content="DEPOIMENTOS" size="40" font="Roboto" width="40%" />

      <ReviewsContainer>
        <ReviewContainer
          target="_blank"
          href="https://maps.app.goo.gl/HTFgZhbq54x7XUuv9"
        >
          <Text
            content="VIGOTAS DA MELHOR QUALIDADE, COM PRONTA ENTREGA, EXCELENTE ATENDIMENTO."
            font="Roboto"
          />
          <a
            target="_blank"
            href="https://www.google.com/maps/contrib/111373281084997704204/reviews/@-19.8159948,-44.0675261,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=pt-BR&entry=ttu"
            rel="noreferrer"
          >
            <Text
              content="Gustavo Almeida"
              font="Roboto"
              color="black"
              size="10"
            />
          </a>
        </ReviewContainer>

        <ReviewContainer
          target="_blank"
          href="https://maps.app.goo.gl/Mt5WxSYbb5jgkoi47"
        >
          <Text content="Excelente atendimento e ótimo preço!" font="Roboto" />
          <a
            target="_blank"
            href="https://www.google.com/maps/contrib/109680827872841773344/reviews/@-23.5495966,-46.2883425,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=pt-BR&entry=ttu"
            rel="noreferrer"
          >
            <Text
              content="Gustavo Valente"
              font="Roboto"
              color="black"
              size="10"
            />
          </a>
        </ReviewContainer>

        <ReviewContainer
          target="_blank"
          href="https://maps.app.goo.gl/s1F4cBp1VYDg9ntJ7"
        >
          <Text
            content="Bloco de excelente qualidade, nem precisei rebocar deixei aparente mesmo. Recomendo."
            font="Roboto"
          />
          <a
            target="_blank"
            href="https://www.google.com/maps/contrib/118370509250437903878/reviews?hl=pt-BR"
            rel="noreferrer"
          >
            <Text
              content="Junior Ramos"
              font="Roboto"
              color="black"
              size="10"
            />
          </a>
        </ReviewContainer>
      </ReviewsContainer>
      <Button
        content="Escreva um Comentário"
        backgroundColor="green"
        fontSize="30px"
        padding="100px"
        maxWidth="100px"
        maxHeight="50px"
      />
    </ReviewsComponent>
  );
};

export default Reviews;
