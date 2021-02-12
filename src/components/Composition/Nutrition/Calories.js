import React, { useState } from "react";
import { CaloriesContainer, ArrowContainer } from "./Colories.style";
import { ContainerCustom, Text, Span } from "components";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";

const Calories = ({ calories }) => {
  const [isCaloriesHidden, setCaloriesHidden] = useState(false);

  const caloriesFieldHandler = () => {
    setCaloriesHidden(!isCaloriesHidden);
  };

  return (
    <>
      <CaloriesContainer>
        <ContainerCustom
          overflow="hidden"
          className={isCaloriesHidden ? "close" : "open"}
          display="flex"
          wrap="wrap"
          justify="space-between"
        >
          {calories.map(({ name, value, ri }, i) => {
            return (
              <ContainerCustom
                display="flex"
                direction="column"
                align="center"
                minWidth="62px"
                margin="13px 0 0 0"
                key={name + value + i}
              >
                <Span
                  family="Open Sans, Arial"
                  lineHeight="20px"
                  size="18px"
                  color="#333333"
                >
                  {value}
                </Span>
                <Span
                  family="Open Sans, Arial"
                  weight="400"
                  lineHeight="16px"
                  size="12px"
                  color="#999999"
                >
                  {name}
                </Span>
                <Text>
                  <Span
                    size="10px"
                    bg="#EBEBEB"
                    weight="600"
                    padding="0 4px"
                    lineHeight="14px"
                    family="Open Sans, Arial"
                    color="#48525E"
                  >{`${ri}% RI`}</Span>
                  <Span>
                    {ri <= 4 ? (
                      <Span
                        size="10px"
                        bg="#E7F7ED"
                        weight="600"
                        padding="0 4px"
                        lineHeight="14px"
                        family="Open Sans, Arial"
                        color="#0EB44D"
                      >
                        Low
                      </Span>
                    ) : null}
                  </Span>
                </Text>
              </ContainerCustom>
            );
          })}
        </ContainerCustom>
      </CaloriesContainer>
      <ArrowContainer margin="17px 0" display="flex" justify="center" align="center">
        <Span
          size="14px"
          weight="700"
          padding="0 4px"
          lineHeight="20px"
          family="Open Sans, Arial"
          onClick={caloriesFieldHandler}
        >
          {isCaloriesHidden ? "Show" : "Hide"}
        </Span>
        <ArrowIcon className={isCaloriesHidden ? "close" : "open"} />
      </ArrowContainer>
    </>
  );
};

export default Calories;
