import React, { useMemo } from "react";
import { ContainerCustom, Span } from "components";
import PropTypes from "prop-types";

const MAX_FEATURES_ICON_NUMBER = 3;

const Features = ({ features, isFavorite }) => {
  const featuresList = useMemo(() => {
    return features.length <= MAX_FEATURES_ICON_NUMBER
      ? features
      : features.slice(3);
  }, [features]);

  return (
    <ContainerCustom
      position="relative"
      display="flex"
      justify="center"
      align="center"
      margin="0 0 14px 0"
    >
      {featuresList.map(({ id, icon, title }) => {
        return (
          <img
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
      >
        <img
          src={
            require(`assets/icons${
              isFavorite ? "/fav-selected.svg" : "/not-fav.svg"
            }`).default
          }
          alt="is product favorite"
        />
      </Span>
    </ContainerCustom>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
};

export default Features;
