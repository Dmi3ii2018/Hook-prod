import React from "react";
import { ContainerCustom, CartItem } from "components";
import PropTypes from "prop-types";

const CartItems = ({ cartItems }) => {
  return (
    <ContainerCustom bg="#ffffff" width="312px" margin="0 auto">
      {
          cartItems.map((item) => <CartItem cartItem={item} />)
      }
    </ContainerCustom>
  );
};

CartItems.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object)
};

export default CartItems;