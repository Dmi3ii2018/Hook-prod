import React from "react";
import { ButtonAdd, DeleteButton, Span, ContainerCustom } from "components";
import PropTypes from "prop-types";

const AddToCart = ({ size, inCartAmount, addHandler, deleteHandler }) => {
console.log("inCartAmount", inCartAmount)
  return (
    <ContainerCustom display="flex" align="center">
      {inCartAmount ? (
        <>
          <DeleteButton clickHandler={deleteHandler} size={size} />
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
        <Span onClick={addHandler} margin="0 6px 0 0">Add</Span>
      )}
      <ButtonAdd clickHandler={addHandler} size={size} />
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
  inCartAmount: PropTypes.number,
  addHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};

export { AddToCart };
