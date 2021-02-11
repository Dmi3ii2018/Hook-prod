import React from "react";
import {RoundCustomIcon} from "./RoundIcon.style";
import PropTypes from 'prop-types';

const RoundIcon = ({ size, icon }) => {
    return React.createElement(RoundCustomIcon, size, icon)
};

RoundIcon.propTypes = {
    size: PropTypes.oneOf(['Big', 'Small']),
    icon: PropTypes.element
}

export { RoundIcon };
