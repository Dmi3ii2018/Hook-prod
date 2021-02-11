import React from 'react';
import { ReactComponent as BinIcon } from "assets/icons/bin.svg";
import { RoundIcon } from "components";
import PropTypes from 'prop-types';

const DeleteButton = ({ size }) => {
    return <RoundIcon size={size} icon={<BinIcon />} />
}

DeleteButton.propTypes = {
    size: PropTypes.oneOf(['Big', 'Small']),
}

export { DeleteButton }
