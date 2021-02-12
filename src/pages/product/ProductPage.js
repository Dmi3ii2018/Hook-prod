import React from "react";
import {
  Navigation,
  ContainerCustom,
  ProductCard,
  RelatedProducts,
  Composition,
} from "components";
import productData from "../../data/choosen-item.json";

const ProductPage = () => {
    const { relatedProducts, composition } = productData;

  return (
    <ContainerCustom>
      <Navigation />
      <ProductCard />
      <RelatedProducts relatedProducts={relatedProducts} />
      <Composition composition={composition} />
    </ContainerCustom>
  );
};

export default ProductPage;
