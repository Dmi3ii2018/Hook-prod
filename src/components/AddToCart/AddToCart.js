import React from "react";
import { ButtonAdd, DeleteButton, Span, ContainerCustom } from "components";
import PropTypes from "prop-types";

const AddToCart = ({ size, inCartAmount }) => {

  return (
    <ContainerCustom display="flex" align="center">
      {inCartAmount ? (
        <>
          <DeleteButton size={size} />
          <Span
            color="#333333"
            margin="0 12px"
            weight="600"
            size={size === "small" ? "12px" : "16px"}
            lineHeight="22px"
            family="Noto Sans, Arial"
          >
            {inCartAmount}
          </Span>
        </>
      ) : (
        <Span margin="0 6px 0 0">Add</Span>
      )}
      <ButtonAdd size={size} />
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
  inCartAmount: PropTypes.number
};

export { AddToCart };
