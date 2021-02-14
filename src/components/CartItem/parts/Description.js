import React from "react";
import { ContainerCustom, Text, Span, AddToCart } from "components";
import PropTypes from "prop-types";
import { ReactComponent as DetailsIcon } from "assets/icons/details-arrow.svg";
import { Link } from "react-router-dom";
import { ActionCreator } from "actions";
import { connect } from "react-redux";

const DescriptionComponent = (props) => {
  const { description, id, chooseProduct, addToCart, deleteProduct } = props;
  const { name, price, discount, special, inCartAmmount } = description;
  console.log("inCmount", inCartAmmount)

  const onCardClick = () => {
    chooseProduct(id);
  };

  const onAddClick = () => {
    addToCart(id);
  };

  const onDeleteClick = () => {
    deleteProduct(id);
  };

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
        {inCartAmmount ? (
          <Link onClick={onCardClick} to={`/product/${id}`}>
            <Span display="flex" align="center" color="#333333" size="10px">
              <Span color="#333333" size="12px" margin="0 4px 0 0">
                Details
              </Span>{" "}
              <DetailsIcon />
            </Span>
          </Link>
        ) : null}
      </ContainerCustom>
      {special && (
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
      )}
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
        <AddToCart
          addHandler={onAddClick}
          deleteHandler={onDeleteClick}
          inCartAmount={inCartAmmount}
          size="small"
        />
      </ContainerCustom>
    </ContainerCustom>
  );
};

DescriptionComponent.propTypes = {
  description: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    isPriceChanged: PropTypes.bool,
    special: PropTypes.string,
  }),
  id: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(ActionCreator.addItemToCart(id)),
    chooseProduct: (id) => dispatch(ActionCreator.chooseProduct(id)),
    deleteProduct: (id) => dispatch(ActionCreator.deleteItemFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(DescriptionComponent);
