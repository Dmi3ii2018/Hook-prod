import React from "react";
import {RoundCustomIcon} from "./RoundIcon.style";
import PropTypes from 'prop-types';

const RoundIcon = ({ size, icon }) => {
    return (
        <RoundCustomIcon big={size === "big" ? true : false} small={size === "small" ? true : false}>
            {icon}
        </RoundCustomIcon>
    )
};

RoundIcon.propTypes = {
    size: PropTypes.oneOf(['big', 'small']),
    icon: PropTypes.element
}

export { RoundIcon };
