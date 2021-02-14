import React from "react";
import { ContainerCustom, Text, Span, AddToCart } from "components";
import PropTypes from "prop-types";

const Description = ({ description, id }) => {
  const { name, price, inCartAmmount } = description;

  return (
    <ContainerCustom padding="0 18px 0 0" position="absolute" bottom="18px" margin="0">
      <Text
        color="#333333"
        width="80%"
        weight="600"
        size="13px"
        lineHeight="18px"
      >
        {name}
      </Text>
      <Text
        margin="4px 0 0 0"
        color="#999999"
        weight="600"
        size="12px"
        lineHeight="16px"
      >{`1 pc / £${price} `}</Text>
      <ContainerCustom
        margin="12px 0 0 0"
        display="flex"
        justify="space-between"
        align="center"
      >
        <Span
          color="#333333"
          weight="700"
          size="16px"
          lineHeight="20px"
        >{`£${price}`}</Span>
        <AddToCart inCartAmount={inCartAmmount} id={id}  size="small" />
      </ContainerCustom>
    </ContainerCustom>
  );
};

Description.propTypes = {
  description: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    inCartAmmount: PropTypes.number,
  }),
  id: PropTypes.number
};

export default Description;
