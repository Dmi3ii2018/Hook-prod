import React from "react";
import { ContainerCustom, Thunder, Span, Button } from "components";

const Checkout = () => {
  return (
    <ContainerCustom padding="8px 10px 20px 10px" display="flex" justify="space-between" bg="#333333">
      <Thunder />
      <ContainerCustom display="flex" direction="column" align="center">
        <Span color="#FFFFFF" size="10px" lineHeight="14px">Delivery:</Span>
        <Span weight="600" color="#FFFFFF" size="14px" lineHeight="22px">25-30 min</Span>
      </ContainerCustom>
      <ContainerCustom display="flex" direction="column" align="center">
        <Span color="#FFFFFF" size="10px" lineHeight="14px">Total</Span>
        <Span weight="600" color="#FFFFFF" size="14px" lineHeight="22px">£ 150.99</Span>
      </ContainerCustom>
      <Button size="14px" weight="700" width="119px" height="40px" background="#FFBC41">
        Checkout
      </Button>
    </ContainerCustom>
  );
};

export { Checkout };
