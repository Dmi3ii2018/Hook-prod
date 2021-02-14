import React from "react";
import {
  Navigation,
  ContainerCustom,
  ProductCard,
  RelatedProducts,
  Composition,
} from "components";

import { connect } from "react-redux";
import { withRouter } from "react-router";

const ProductPage = (props) => {
  const { choosenProduct, relatedItems } = props;
  const { composition } = choosenProduct;
  console.log("prod props", props)
  return (
    <ContainerCustom  >
      <Navigation title={`Milk & Cheese`} />
      <ProductCard productData={choosenProduct} />
      <RelatedProducts relatedProducts={relatedItems} />
      <Composition composition={composition} />
    </ContainerCustom>
  );
};

const mapStateToProps = (state) => {
  const { cartItems, choosenProductId } = state;
  const choosenProduct = cartItems.find((item) => item.id === choosenProductId)
  const relatedItems = cartItems.filter((item) => item.id !== choosenProductId);
  return {
    choosenProduct,
    relatedItems,
  };
};

export default withRouter(connect(mapStateToProps)(ProductPage));
