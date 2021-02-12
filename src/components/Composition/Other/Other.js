import React from "react";
import { ContainerCustom, Title, Span } from "components";
import PropTypes from "prop-types";

const Other = ({ other }) => {
  return (
    <ContainerCustom>
      <Title id="Other">Other</Title>
      {other.map(({ name, value }, i) => {
        return (
          <ContainerCustom
          margin="14px 0"
            display="flex"
            justify="space-between"
            align="center"
            key={name + i}
          >
            <Span
              family="Open Sans, Arial"
              size="12px"
              lineHeight="16px"
              color="#878786"
            >
              {name}
            </Span>
            <Span
              width="40%"
              family="Open Sans, Arial"
              size="12px"
              lineHeight="16px"
              color="#333333"
              textAlign="right"
            >
              {" "}
              {value}{" "}
            </Span>
          </ContainerCustom>
        );
      })}
    </ContainerCustom>
  );
};

Other.propTypes = {
  other: PropTypes.arrayOf(PropTypes.object),
};

export default Other;
