import React from "react";
import { Title, ContainerCustom, RelatedItemCard } from "components";

const RelatedProducts = ({ relatedProducts }) => {

  return (
    <ContainerCustom margin="24px 0 24px 24px">
      <Title margin="0 0 14px 0">Buy with this product</Title>
      <ContainerCustom display="flex" wrap="nowrap" overflow="scroll" >
        {relatedProducts.map((item) => (
          <RelatedItemCard key={item.id} item={item} />
        ))}
      </ContainerCustom>
    </ContainerCustom>
  );
};

export { RelatedProducts };
