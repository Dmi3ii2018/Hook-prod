import React from "react";
import { ButtonAdd, DeleteButton, Span, ContainerCustom } from "components";
import PropTypes from "prop-types";
import { ActionCreator } from "actions";
import { connect } from "react-redux";

const CartAdding = ({ size, inCartAmount, addToCart, deleteProduct, id }) => {
console.log("inCartAmount", inCartAmount)

const onAddClick = () => {
  addToCart(id);
};

const onDeleteClick = () => {
  deleteProduct(id);
};

  return (
    <ContainerCustom display="flex" align="center">
      {inCartAmount ? (
        <>
          <DeleteButton clickHandler={onDeleteClick} size={size} />
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
        <Span onClick={onAddClick} margin="0 6px 0 0">Add</Span>
      )}
      <ButtonAdd clickHandler={onAddClick} size={size} />
    </ContainerCustom>
  );
};

CartAdding.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
  inCartAmount: PropTypes.number,
  addToCart: PropTypes.func,
  deleteProduct: PropTypes.func,
  id: PropTypes.number
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(ActionCreator.addItemToCart(id)),
    deleteProduct: (id) => dispatch(ActionCreator.deleteItemFromCart(id)),
  };
};

export const AddToCart = connect(null, mapDispatchToProps)(CartAdding);
