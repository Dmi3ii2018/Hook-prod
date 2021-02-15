import React from "react";
import { ContainerCustom, Thunder, Span, Button } from "components";
import PropTypes from "prop-types";

const Checkout = ({ totalPrice }) => {
  return (
    <ContainerCustom
      borderRadius="8px 8px 0 0"
      padding="8px 10px 20px 10px"
      display="flex"
      justify="space-between"
      bg="#333333"
      margin="0 0 -22px 0"
    >
      <Thunder />
      <ContainerCustom display="flex" direction="column" align="center">
        <Span color="#FFFFFF" size="10px" lineHeight="14px">
          Delivery:
        </Span>
        <Span weight="600" color="#FFFFFF" size="14px" lineHeight="22px">
          25-30 min
        </Span>
      </ContainerCustom>
      <ContainerCustom display="flex" direction="column" align="center">
        <Span color="#FFFFFF" size="10px" lineHeight="14px">
          Total
        </Span>
        <Span weight="600" color="#FFFFFF" size="14px" lineHeight="22px">
          £ {totalPrice}
        </Span>
      </ContainerCustom>
      <Button
        size="14px"
        weight="700"
        width="119px"
        height="40px"
        background="#FFBC41"
      >
        Checkout
      </Button>
    </ContainerCustom>
  );
};

Checkout.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export { Checkout };
