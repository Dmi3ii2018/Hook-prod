import React from "react";
import { ContainerCustom, Title, Span } from "components";
import { Input } from "./Payments.style";
import { ReactComponent as OkIcon } from "assets/icons/ok-sign.svg";

const Payments = () => {
  return (
    <ContainerCustom>
      <Title margin="10px 0" padding="0 0 0 24px">Payment</Title>
      <ContainerCustom display="flex" position="relative">
        <Input placeholder="GHYU907H" />
        <Span
          right="33px"
          top="10px"
          position="absolute"
          borderRadius="50%"
          width="28px"
          height="28px"
          bg="#0EB44D"
          display="flex"
          justify="center"
          align="center"
        >
          <OkIcon />
        </Span>
      </ContainerCustom>
      <ContainerCustom></ContainerCustom>
    </ContainerCustom>
  );
};

export { Payments };
