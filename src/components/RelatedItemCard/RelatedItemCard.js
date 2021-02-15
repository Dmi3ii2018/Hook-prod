import React, { useMemo } from "react";
import { ContainerCustom, Img } from "components";
import PropTypes from "prop-types";
import Description from "./parts/Description"
import { useTemplateStore } from "hooks";

const RelatedItemCard = ({ item }) => {
  const { handleFavorite } = useTemplateStore();
  const { description, image, isFavorite, id } = useMemo(() => item, [item]);

  const favoriteClickHandler = (id) => {
    handleFavorite(id)
  }

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
      onClick={() => favoriteClickHandler(id)}
        src={
          require(`assets/icons${
            isFavorite ? "/fav-selected.svg" : "/not-fav.svg"
          }`).default
        }
        alt={isFavorite ? "Product is Favorite" : "Add to favorite"}
        position="absolute"
        right="18px"
      />
      <ContainerCustom height="77px" display="flex" justify="center">
        <Img margin="20px 0 0 0" src={require(`assets/img${image}`).default} alt={description.name} />
      </ContainerCustom>
      <Description id={id} description={description} />
    </ContainerCustom>
  );
};

RelatedItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    isFavorite: PropTypes.bool,
    id: PropTypes.number
  }),
};

export { RelatedItemCard };
