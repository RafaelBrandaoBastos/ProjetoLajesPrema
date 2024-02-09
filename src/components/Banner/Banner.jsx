import React from "react";
import { BannerComponent } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Image from "../../micro/Image/Image.jsx";
import BannerImage from "../../assets/BannerImage.jpg";

const Banner = () => {
  return (
    <BannerComponent>
      <Image content={BannerImage} width="50%" />
    </BannerComponent>
  );
};

export default Banner;
