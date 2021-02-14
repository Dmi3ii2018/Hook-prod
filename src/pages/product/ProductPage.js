import React from "react";
import {
  Navigation,
  ContainerCustom,
  ProductCard,
  RelatedProducts,
  Composition,
} from "components";
import productData from "../../data/choosen-item.json";
import { connect } from "react-redux";

const ProductPage = (props) => {
  const { choosenProduct } = props;
  const { relatedProducts, composition } = choosenProduct;
  
  return (
    <ContainerCustom  >
      <Navigation />
      <ProductCard productData={productData} />
      <RelatedProducts relatedProducts={relatedProducts} />
      <Composition composition={composition} />
    </ContainerCustom>
  );
};

const mapStateToProps = (state) => {
  const { cartItems, choosenProductId } = state;
  const choosenProduct = cartItems.find((item) => item.id === choosenProductId)
  return {
    choosenProduct,
  };
};

export default connect(mapStateToProps)(ProductPage);
