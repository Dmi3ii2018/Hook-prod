import React from "react";
import { Title, ContainerCustom, RelatedItemCard } from "components";
import productData from "../../data/choosen-item.json";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <ContainerCustom margin="24px 0 24px 24px">
      <Title>Buy with this product</Title>
      <ContainerCustom display="flex" wrap="nowrap" overflow="scroll" >
        {relatedProducts.map((item) => (
          <RelatedItemCard key={item.id} item={item} />
        ))}
      </ContainerCustom>
    </ContainerCustom>
  );
};

export { RelatedProducts };
