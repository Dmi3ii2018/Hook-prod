import React from "react";
import { ButtonAdd, DeleteButton, Span, ContainerCustom } from "components";
import PropTypes from "prop-types";

const AddToCart = ({ size }) => {
  return (
    <ContainerCustom display="flex" align="center">
      <DeleteButton size={size} />
      <Span
        color="#333333"
        margin="0 12px"
        weight="600"
        size="16px"
        lineHeight="22px"
        family="NotoSans, Arial"
      >
        {0}
      </Span>
      <ButtonAdd size={size} />
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
};

export { AddToCart };
