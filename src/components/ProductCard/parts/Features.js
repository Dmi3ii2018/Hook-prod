import React, { useMemo } from "react";
import { ContainerCustom, Span, Img } from "components";
import PropTypes from "prop-types";
import { useTemplateStore } from "hooks";

const MAX_FEATURES_ICON_NUMBER = 3;

const Features = ({ features, isFavorite, id }) => {
  const { handleFavorite } = useTemplateStore();
  const featuresList = useMemo(() => {
    return features.length <= MAX_FEATURES_ICON_NUMBER
      ? features
      : features.slice(3);
  }, [features]);

  const favoriteClickHandler = (id) => {
    handleFavorite(id)
  }

  return (
    <ContainerCustom
      position="relative"
      display="flex"
      justify="center"
      align="center"
      margin="0 0 14px 0"
    >
      {featuresList.map(({ id, icon, title }, i) => {
        return (
          <Img
            margin={i === 0 ? "0 0 0 22px" : "0 0 0 6px"}
            key={id}
            src={require(`assets/icons${icon}`).default}
            alt={title}
          />
        );
      })}
      {features.length > MAX_FEATURES_ICON_NUMBER && (
        <Span
          color="#CCCCCC"
          family="Open Sans"
          weight="600"
          size="10px"
          lineHeight="14px"
          margin="0 0 0 6px"
        >
          {`+${features.length - MAX_FEATURES_ICON_NUMBER}`}
        </Span>
      )}
      <Span
        right="0"
        position="absolute"
        display="flex"
        justify="center"
        align="center"
        cursor="pointer"
        onClick={() => favoriteClickHandler(id)}
      >
        <Img
          src={
            require(`assets/icons${
              isFavorite ? "/fav-selected.svg" : "/not-fav.svg"
            }`).default
          }
          alt={isFavorite ? "Product is Favorite" : "Add to favorite"}
        />
      </Span>
    </ContainerCustom>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Features;
