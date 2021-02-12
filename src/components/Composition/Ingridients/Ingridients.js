import React from 'react'
import PropTypes from "prop-types";
import { ContainerCustom, Title, Text, Divider } from "components";

const Ingridients = ({ ingredients }) => {
    return (
        <ContainerCustom>
            <Title id="Ingredients">Ingredients</Title>
            <Text>{ ingredients }</Text>
        </ContainerCustom>
    )
}

Ingridients.propTypes = {
    ingredients: PropTypes.string,
  };

export default Ingridients
