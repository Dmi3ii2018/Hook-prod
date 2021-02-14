import React, { useMemo } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "actions";
import {
  Navigation,
  ContainerCustom,
  DeliveryForm,
  Payments,
  Total,
  Checkout
} from "components";
import CartItems from "./parts/CartItems";

const Cart = (props) => {
  console.log("props: ", props);
  const { cartItems } = props;

const totalPrice = useMemo(() => {
    const total = cartItems.reduce((sum, current) => sum + current.description.price, 0)
    console.log(total)
    return total.toFixed(2);
}, [cartItems])

  return (
    <ContainerCustom>
      <Navigation />
      <DeliveryForm />
      <CartItems cartItems={cartItems} />
      <Payments />
      <Total order={totalPrice} />
      <Checkout />
    </ContainerCustom>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: [...state.cartItems],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(ActionCreator.addItemToCart(id)),
    chooseProduct: (id) => dispatch(ActionCreator.chooseProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
