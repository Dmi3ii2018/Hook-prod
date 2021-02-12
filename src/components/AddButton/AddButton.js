import React from "react";
import { AddButton } from "./AddButton.style";
import PropTypes from 'prop-types';
import { ReactComponent as PlusSign } from "assets/icons/plus-sign.svg";

const ButtonAdd = ({ size, icon, clickHandler }) => {
    return (
        <AddButton onClick={clickHandler} big={size === "big" ? true : false} small={size === "small" ? true : false}>
            <PlusSign />
        </AddButton>
    )
};

ButtonAdd.propTypes = {
    size: PropTypes.oneOf(['big', 'small']),
    icon: PropTypes.element
}

export { ButtonAdd };