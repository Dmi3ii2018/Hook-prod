import React from "react";
import { ContainerCustom, Text, Span, AddToCart } from "components";
import PropTypes from "prop-types";

const Description = ({ description, id }) => {
  const { name, price, inCartAmmount } = description;

  return (
    <ContainerCustom margin="40px 0 0 0">
      <Text color="#333333" width="80%" weight="600" size="16px" lineHeight="22px">{name}</Text>
      <Text margin="13px 0 0 0" color="#999999" weight="600" size="16px" lineHeight="22px">{`1 pc / £${price} `}</Text>
      <ContainerCustom margin="7px 0 14px 0" display="flex" justify="space-between">
        <Span color="#333333" weight="700" size="30px" lineHeight="36px">{`£${price}`}</Span>
        <AddToCart id={id} inCartAmount={inCartAmmount} size="big" />
      </ContainerCustom>
    </ContainerCustom>
  );
};

Description.propTypes = {
  description: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Description;
