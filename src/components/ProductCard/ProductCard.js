import React from "react";
import { ContainerCustom, Divider } from "components";
import Features from "./parts/Features";
import Carousel from "./parts/Carousel";
import Description from "./parts/Description";
import Composition from "./parts/Composition";

const ProductCard = ({ productData }) => {
  const { features, isFavorite, description, id, image } = productData;
  return (
    <ContainerCustom
      bg="#ffffff"
      borderRadius="8px"
      margin="0 auto"
      minHeight="460px"
      padding="10px 16px 16px 18px"
      width="312px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Features id={id} features={features} isFavorite={isFavorite} />
      <Carousel image={image} />
      <Description id={id} description={description} />
      <Divider />
      <Composition />
    </ContainerCustom>
  );
};

export { ProductCard };
