import React from "react";
import { ContainerCustom, Title, Text, Span, AddToCart } from "components";
import PropTypes from "prop-types";

const Description = ({ description }) => {
  const { name, price } = description;

  return (
    <ContainerCustom>
      <Title>{name}</Title>
      <Text>{`1 pc / £${price} `}</Text>
      <ContainerCustom display="flex">
        <Span>{`£${price}`}</Span>
        <AddToCart />
      </ContainerCustom>
    </ContainerCustom>
  );
};

Description.propTypes = {
  description: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Description;
