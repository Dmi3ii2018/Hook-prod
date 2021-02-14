import React from "react";
import {
  ContainerCustom,
  Title,
  Text,
  List,
  ListItem,
  Divider,
} from "components";
import Calories from "./Calories";
import PropTypes from "prop-types";

const Nutrition = ({ nutrition }) => {
  const { description, points, calories } = nutrition;

  return (
    <ContainerCustom>
      <Title
        size="16px"
        lineHeight="32px"
        color="#333333"
        weight="700"
        id="Nutrition"
      >
        Nutrition
      </Title>
      <Text
        size="12px"
        lineHeight="16px"
        color="#333333"
        weight="400"
        family="Open Sans"
        margin="0 0 17px 0"
      >
        {description}
      </Text>
      <List margin="0 0 26px 0" paddingLeft="15px" type="disc">
        {points.map((point) => (
          <ListItem
            size="12px"
            lineHeight="16px"
            color="#999999"
            weight="400"
            family="Open Sans"
            key={Math.random()}
          >
            {point}
          </ListItem>
        ))}
      </List>
      <Divider margin="0 0 17px 0" />
      <Calories calories={calories} />
    </ContainerCustom>
  );
};

Nutrition.propTypes = {
  nutrition: PropTypes.shape({
    description: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    calories: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Nutrition;
