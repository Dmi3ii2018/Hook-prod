import React from "react";
import { ContainerCustom, Divider } from "components";
import Features from "./parts/Features";
import Carousel from "./parts/Carousel";
import Description from "./parts/Description";
import Composition from "./parts/Composition";

const ProductCard = ({ productData }) => {
  const { features, isFavorite, description } = productData;
  return (
    <ContainerCustom bg="#ffffff" borderRadius="8px" padding="10px 16px 0 16px" margin="0 auto" borderColor="#000000" width="312px">
      <Features features={features} isFavorite={isFavorite} />
      <Carousel />
      <Description description={description} />
      <Divider />
      <Composition />
    </ContainerCustom>
  );
};

export { ProductCard };
