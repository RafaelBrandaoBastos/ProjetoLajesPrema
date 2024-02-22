import React from "react";
import { GalleryComponent, GalleryContainer } from "./style.js";
import Text from "../../micro/Text/Text.jsx";
import Title from "../../micro/Title/Title.jsx";
import Image from "../../micro/Image/Image.jsx";

const Gallery = () => {
  return (
    <GalleryComponent>
      <Text content="GALERIA" size="40" font="Roboto" width="40%" />
      <GalleryContainer></GalleryContainer>
    </GalleryComponent>
  );
};

export default Gallery;
