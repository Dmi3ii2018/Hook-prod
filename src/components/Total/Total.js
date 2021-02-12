import React from "react";
import { ContainerCustom, Span, Divider } from "components";

const Total = ({ order = 0, delivery = 0, promocode = 0 }) => {
  return (
    <ContainerCustom
      borderRadius="8px"
      bg="#ffffff"
      width="312px"
      margin="20px auto"
      padding="12px 8px"
    >
      <ContainerCustom display="flex" align="center" justify="space-between">
        <Span color="#333333" size="16px" lineHeight="25px">Order</Span>
        <Span color="#333333" size="16px" lineHeight="25px"> £{order}</Span>
      </ContainerCustom>
      <ContainerCustom display="flex" align="center" justify="space-between">
        <Span color="#333333" size="16px" lineHeight="25px">Delivery</Span>
        <Span color="#333333" size="16px" lineHeight="25px"> £{delivery}</Span>
      </ContainerCustom>
      <ContainerCustom display="flex" align="center" justify="space-between">
        <Span color="#E5243F" size="16px" lineHeight="25px">Promocode</Span>
        <Span color="#E5243F" size="16px" lineHeight="25px"> - £{promocode}</Span>
      </ContainerCustom>
      <Divider margin="12px 0" />
      <ContainerCustom display="flex" align="center" justify="space-between">
        <Span color="#333333" size="24px" lineHeight="25px">Total:</Span>
        <Span color="#333333" size="24px" lineHeight="25px"> £{order + delivery - promocode}</Span>
      </ContainerCustom>
    </ContainerCustom>
  );
};

export { Total };
