import React, { useState } from "react";
import { ButtonAdd, DeleteButton, Span, ContainerCustom } from "components";
import PropTypes from "prop-types";

const AddToCart = ({ size }) => {
  const [inCartAmount, setInCart] = useState(0);

  const onAddButtonClick = () => {
    setInCart((prevState) => prevState + 1);
  }

  const onDeleteButtonClick = () => {
    setInCart(0);
  }
  return (
    <ContainerCustom display="flex" align="center">
      {inCartAmount ? (
        <>
          <DeleteButton clickHandler={onDeleteButtonClick} size={size} />
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
      <ButtonAdd clickHandler={onAddButtonClick} size={size} />
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
};

export { AddToCart };
