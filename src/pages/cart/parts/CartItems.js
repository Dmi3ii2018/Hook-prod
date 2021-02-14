import React from "react";
import { ContainerCustom, CartItem } from "components";
import PropTypes from "prop-types";

const CartItems = ({ cartItems }) => {
  return (
    <ContainerCustom bg="#ffffff" width="312px" margin="0 auto">
      {cartItems.length > 0 ? (
        cartItems.map((item, i) => (
          <CartItem key={item.id} id={item.id} cartItem={item} />
        ))
      ) : (
        <ContainerCustom
          display="flex"
          align="center"
          justify="center"
          height="200px"
          borderRadius="0 0 8px 8px"
        >
          Корзина пуста
        </ContainerCustom>
      )}
    </ContainerCustom>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default CartItems;
