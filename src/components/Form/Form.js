import React from "react";
import { ContainerCustom, Title, Input, Form, Label, Button } from "components";
import { ReactComponent as BinIcon } from "assets/icons/bin.svg";

const DeliveryForm = () => {
  return (
    <ContainerCustom
      padding="18px 13px 18px 18px"
      position="relative"
      bg="#ffffff"
      width="312px"
      margin="0 auto"
      borderRadius="8px 8px 0 0"
    >
      <Title>Delivery address</Title>
      <Form>
        <ContainerCustom margin="10px 0 0 0" position="relative">
          <Input id="Country" />
          <Label htmlFor="Country">Country</Label>
        </ContainerCustom>
        <ContainerCustom display="flex" justify="space-between" align="center">
        <ContainerCustom width="87.5px" margin="10px 0 0 0" position="relative">
          <Input id="Flat" />
          <Label htmlFor="Flat">Flat</Label>
        </ContainerCustom>
        <ContainerCustom width="87.5px" margin="10px 0 0 0" position="relative">
          <Input id="Floor" />
          <Label htmlFor="Floor">Floor</Label>
        </ContainerCustom>
        <ContainerCustom width="87.5px" margin="10px 0 0 0" position="relative">
          <Input id="Block" />
          <Label htmlFor="Block">Block</Label>
        </ContainerCustom>
        </ContainerCustom>
        <Button position="absolute" top="18px" right="12px" type="reset">
          <BinIcon />
        </Button>
      </Form>
    </ContainerCustom>
  );
};

export { DeliveryForm };
