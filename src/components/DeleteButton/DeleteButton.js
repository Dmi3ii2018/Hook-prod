import React from 'react';
import { ReactComponent as BinIcon } from "assets/icons/bin.svg";
import { RoundIcon } from "components";
import PropTypes from 'prop-types';

const DeleteButton = ({ size, clickHandler }) => {
    return <RoundIcon cb={clickHandler} size={size} icon={<BinIcon />} />
}

DeleteButton.propTypes = {
    size: PropTypes.oneOf(['big', 'small']),
}

export { DeleteButton }
