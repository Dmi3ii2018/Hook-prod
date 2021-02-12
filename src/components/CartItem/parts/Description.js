import React from "react";
import { ContainerCustom, Text, Span, AddToCart } from "components";
import PropTypes from "prop-types";
import { ReactComponent as DetailsIcon } from "assets/icons/details-arrow.svg";

const Description = ({ description, isLast }) => {
  const { name, price, discount, special, inCartAmmount } = description;
  return (
    <ContainerCustom grow="1" bottom="18px" margin="0">
      <ContainerCustom display="flex" align="flex-start">
        <Text
          color="#000000"
          width="80%"
          weight="600"
          size="12px"
          lineHeight="16px"
        >
          {name}
        </Text>
        {isLast ? (
          <Span display="flex" align="center" color="#333333" size="10px">
            <Span color="#333333" size="12px" margin="0 4px 0 0">
              Details
            </Span>{" "}
            <DetailsIcon />
          </Span>
        ) : null}
      </ContainerCustom>
      <Span
        width="fit-content"
        height="20px"
        padding="0 5px"
        margin="5px 0 0 0"
        display="flex"
        justify="center"
        align="center"
        bg="#FFEBBF"
        color="#333333"
        borderRadius="3px"
        size="8px"
        lineHeight="11px"
        dangerouslySetInnerHTML={{ __html: special }}
      />
      <ContainerCustom
        margin="5px 0 0 0"
        display="flex"
        justify="space-between"
        align="baseline"
      >
        <Span
          color={discount ? "#E5243F" : "#333333"}
          weight="700"
          size="16px"
          lineHeight="20px"
          display="flex"
          direction="column"
        >
          {`£${discount ? discount : price}`}
          {discount && discount !== price && (
            <Span
              family="Noto Sans"
              weight="400"
              margin="0 0 -12px 0"
              size="12px"
              textDecoration="line-through"
              color="#999999"
            >
              {price}
            </Span>
          )}
        </Span>
        <Text
          margin="0 auto 0 4px"
          color="#999999"
          weight="600"
          size="12px"
          lineHeight="20px"
        >{`1 pc / £${price} `}</Text>
        <AddToCart inCartAmount={inCartAmmount} size="small" />
      </ContainerCustom>
    </ContainerCustom>
  );
};

Description.propTypes = {
  description: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    isPriceChanged: PropTypes.bool,
    special: PropTypes.string,
  }),
  isLast: PropTypes.bool,
};

export default Description;
