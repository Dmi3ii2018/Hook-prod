import React from "react";
import PropTypes from "prop-types";
import { ContainerCustom, Title, Text } from "components";

const Ingridients = ({ ingredients }) => {
  return (
    <ContainerCustom>
      <Title
        size="16px"
        lineHeight="32px"
        color="#333333"
        weight="700"
        id="Ingredients"
      >
        Ingredients
      </Title>
      <Text
        size="12px"
        lineHeight="16px"
        color="#333333"
        weight="400"
        family="Open Sans"
      >
        {ingredients}
      </Text>
    </ContainerCustom>
  );
};

Ingridients.propTypes = {
  ingredients: PropTypes.string,
};

export default Ingridients;
