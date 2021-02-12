import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "actions";
import {
  Navigation,
  ContainerCustom,
  DeliveryForm,
  Payments,
} from "components";
import CartItems from "./parts/CartItems";

const Cart = (props) => {
  console.log("props: ", props);
  const { cartItems } = props;
  return (
    <ContainerCustom>
      <Navigation />
      <DeliveryForm />
      <CartItems cartItems={cartItems} />
      <Payments />
    </ContainerCustom>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(ActionCreator.addItemToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
