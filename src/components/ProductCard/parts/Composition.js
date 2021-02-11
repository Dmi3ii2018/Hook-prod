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
    >
      <ListItem>Nutrition</ListItem>
      <ListItem>Ingredients</ListItem>
      <ListItem>Other</ListItem>
    </List>
  );
};

export default Composition;
