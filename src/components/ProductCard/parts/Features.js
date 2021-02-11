import React, { useMemo } from "react";
import { ContainerCustom, Span } from "components";
import PropTypes from "prop-types";

const MAX_FEATURES_ICON_NUMBER = 3;

const Features = ({ features, isFavorite }) => {
  const featuresList = useMemo(() => {
    return features.length <= MAX_FEATURES_ICON_NUMBER ? features : features.slice(3)
  }, [features])

  return (
    <ContainerCustom display="flex" justify="center" align="center">
      {featuresList.map(({ id, icon, title }) => {
        return  <img key={id} src={require(`assets/icons${icon}`).default} alt={title} />;
      })}
      {(features.length > MAX_FEATURES_ICON_NUMBER) && (
        <Span>
          {`+${features.length - MAX_FEATURES_ICON_NUMBER}`}
        </Span>
      )}
      <Span>
        <img
          src={require(`assets/icons${isFavorite ? "/fav-selected.svg" : "/not-fav.svg"}`).default}
          alt="is product favorite"
        />
      </Span>
    </ContainerCustom>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool
}

export default Features;
