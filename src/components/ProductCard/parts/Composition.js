import React from "react";
import { List, ListItem } from "components";

const Composition = () => {
  return (
    <List
      size="14px"
      weight="700"
      primary
      display="flex"
      justify="space-between"
      margin="16px 0 0 0"
      color="#FFB000"
    >
      <ListItem><a href="#Nutrition">Nutrition</a></ListItem>
      <ListItem><a href="#Ingredients">Ingredients</a></ListItem>
      <ListItem><a href="#Other">Other</a></ListItem>
    </List>
  );
};

export default Composition;
