import React from 'react'
import { ContainerCustom, Title, Input, Form, Label, Button, Img } from "components";
import PropTypes from "prop-types";
import Description from "./parts/Description";

const CartItem = ({ cartItem }) => {
    return (
        <ContainerCustom>
            <Img />
            <Description />
        </ContainerCustom>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object
};

export { CartItem }
