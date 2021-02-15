import React from "react";
import {
  Navigation,
  ContainerCustom,
  ProductCard,
  RelatedProducts,
  Composition,
} from "components";
import { useTemplateStore } from "hooks";

const ProductPage = () => {
  const { choosenProduct, relatedItems } = useTemplateStore();
  const { composition } = choosenProduct;

  return (
    <ContainerCustom  >
      <Navigation title={`Milk & Cheese`} />
      <ProductCard productData={choosenProduct} />
      <RelatedProducts relatedProducts={relatedItems} />
      <Composition composition={composition} />
    </ContainerCustom>
  );
};

export default ProductPage;
