import React, { useMemo } from "react";
import {
  Navigation,
  ContainerCustom,
  DeliveryForm,
  Payments,
  Total,
  Checkout,
} from "components";
import CartItems from "./parts/CartItems";
import { useTemplateStore } from "hooks";

const Cart = (props) => {
  const { cartItems } = useTemplateStore();

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce(
      (sum, current) => sum + (current.description.price * current.description.inCartAmmount),
      0
    );
    return total.toFixed(2);
  }, [cartItems]);

  return (
    <ContainerCustom>
      <Navigation title="Navigation" />
      <DeliveryForm />
      <CartItems cartItems={cartItems} />
      <Payments />
      <Total order={totalPrice} />
      <Checkout totalPrice={+totalPrice} />
    </ContainerCustom>
  );
};

export default Cart;
