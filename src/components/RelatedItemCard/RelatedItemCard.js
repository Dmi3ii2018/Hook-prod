import React, { useMemo } from "react";
import { ContainerCustom, Img } from "components";
import PropTypes from "prop-types";
import Description from "./parts/Description"

const RelatedItemCard = ({ item }) => {
  const { name, img, price, isFavorite } = useMemo(() => item, [item]);
  return (
    <ContainerCustom
      bg="#ffffff"
      minHeight="228px"
      borderColor="#000000"
      borderRadius="8px"
      bo
      minWidth="152px"
      padding="9px 18px 0 12px"
      position="relative"
      margin="0 8px 0 0"
    >
      <Img
        src={
          require(`assets/icons${
            isFavorite ? "/fav-selected.svg" : "/not-fav.svg"
          }`).default
        }
        alt={isFavorite ? "Product is Favorite" : "Add to favorite"}
        position="absolute"
        right="18px"
      />
      <ContainerCustom display="flex" justify="center">
        <Img margin="20px 0 0 0" src={require(`assets/img/${img}`).default} alt={name} />
      </ContainerCustom>
      <Description name={name} price={price} />
    </ContainerCustom>
  );
};

RelatedItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
};

export { RelatedItemCard };
