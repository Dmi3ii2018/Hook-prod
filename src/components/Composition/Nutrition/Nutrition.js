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
      <Title id="Nutrition">Nutrition</Title>
      <Text>{description}</Text>
      <List type="disc">
        {points.map((point) => (
          <ListItem key={Math.random()}>{point}</ListItem>
        ))}
      </List>
      <Divider />
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
