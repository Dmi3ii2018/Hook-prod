import React from "react";
import { AddButton, DeleteButton, Span, ContainerCustom } from "components";
import { ReactComponent as PlusSign } from "assets/icons/plus-sign.svg";
import PropTypes from "prop-types";

const AddToCart = ({ size }) => {
  return (
    <ContainerCustom display="flex">
      <DeleteButton />
      <Span>{0}</Span>
      {React.createElement(AddButton, size, <PlusSign />)}
    </ContainerCustom>
  );
};

AddToCart.propTypes = {
  size: PropTypes.oneOf(["Big", "Small"]),
};

export { AddToCart };
