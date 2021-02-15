import React, { useState } from "react";
import {
  ButtonAdd,
  DeleteButton,
  Span,
  ContainerCustom,
  Notification,
} from "components";
import PropTypes from "prop-types";
import { useTemplateStore } from "hooks";

const AddToCart = ({ size, inCartAmount, id }) => {
  const { addToCart, deleteProduct } = useTemplateStore();
  const [showNotifyClass, setNotifyClass] = useState(null);
  const [isNotifyOpen, setNotify] = useState(null);

  const notificationHandler = () => {
    setNotifyClass("warning");
    setNotify("open");
    setTimeout(() => {
      setNotify("close");
    }, 1000);
  };

  const onAddClick = () => {
    addToCart(id);
    // notificationHandler();
  };

  const onDeleteClick = () => {
    // notificationHandler();
    deleteProduct(id);
  };

  return (
    <ContainerCustom display="flex" align="center">
      {/* {
        <Notification
          type={`${showNotifyClass} ${isNotifyOpen}`}
          text="Your Cart has changed"
        />
      } */}
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
        <Span onClick={onAddClick} margin="0 6px 0 0">
          Add
        </Span>
      )}
      <ButtonAdd clickHandler={onAddClick} size={size} />
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["big", "small"]),
  inCartAmount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export { AddToCart }
