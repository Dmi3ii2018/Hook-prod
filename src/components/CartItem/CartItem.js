import React from "react";
import { ContainerCustom, Img, AddToCart } from "components";
import PropTypes from "prop-types";
import Description from "./parts/Description";

const CartItem = ({ cartItem, isLast }) => {
  const { description, image } = cartItem;

  return (
    <ContainerCustom display="flex" padding="12px 8px" minHeight="90px" border="1px solid">
      <Img width="43" height="49" src={require(`assets/img${image}`).default} alt={description.name} />
      <Description isLast={isLast} description={description} />
    </ContainerCustom>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export { CartItem };
