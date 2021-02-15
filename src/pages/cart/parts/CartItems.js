import React, { useEffect, useState, useRef } from "react";
import { ContainerCustom, CartItem, Title, Notification } from "components";
import PropTypes from "prop-types";

const CartItems = ({ cartItems }) => {
  const [showNotifyClass, setNotifyClass] = useState(null);
  const [isNotifyOpen, setNotify] = useState(null);
  const isFirstRender = useRef(true);

  const notificationHandler = () => {
    setNotifyClass("warning");
    setNotify("open");
    setTimeout(() => {
      setNotify("close");
    }, 1000);
  };

  useEffect(() => {
    if(!isFirstRender.current) {
      notificationHandler();
    }
    isFirstRender.current = false;
  }, [cartItems])

  return (
    <ContainerCustom
      borderRadius="0 0 8px 8px"
      bg="#ffffff"
      width="312px"
      margin="0 auto"
    >
      {
        <Notification
          type={`${showNotifyClass} ${isNotifyOpen}`}
          text="Your Cart has changed"
        />
      }
      <Title padding="0 0 0 18px">{ `${ cartItems.length } items` }</Title>
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
          The cart is empty
        </ContainerCustom>
      )}
    </ContainerCustom>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default CartItems;
