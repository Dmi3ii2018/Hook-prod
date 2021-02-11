import React from "react";
import { ContainerCustom } from "components";
import productData from "../../data/choosen-item.json";
import Features from "./parts/Features";
import Carousel from "./parts/Carousel";
import Description from "./parts/Description";

const ProductCard = () => {
  const { features, isFavorite, description } = productData;
  return (
    <ContainerCustom margin="0 auto" borderColor="#000000" width="312px">
      <Features features={features} isFavorite={isFavorite} />
      <Carousel />
      <Description description={description} />
    </ContainerCustom>
  );
};

export { ProductCard };
