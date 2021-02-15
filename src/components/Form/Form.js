import React, { useState, useCallback } from "react";
import {
  ContainerCustom,
  Title,
  Input,
  Span,
  Form,
  Label,
  Button,
  Notification,
} from "components";
import { ReactComponent as BinIcon } from "assets/icons/bin.svg";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";

const DeliveryForm = () => {
  const formInitialValue = {
    country: "",
    flat: "",
    floor: "",
    block: "",
  };
  const [showNotifyClass, setNotifyClass] = useState(null);
  const [isNotifyOpen, setNotify] = useState(null);
  const [formValue, setFormValue] = useState(() => formInitialValue);

  const formChangeHandler = useCallback(
    (evt) => {
      setFormValue(() => ({
        ...formValue,
        [evt.target.name]: evt.target.value,
      }));
    },
    [formValue]
  );

  const submitHandler = useCallback(
    (evt) => {
      evt.preventDefault();
      const isFormInvalid = Object.values(formValue).includes("");
      if (isFormInvalid) {
        setNotifyClass("error");
      } else {
        setNotifyClass("success");
      }
      setNotify("open");
      setTimeout(() => {
        setNotify("close");
      }, 2000);
    },
    [formValue]
  );

  const resetHandler = () => {
    setFormValue(formInitialValue);
  };

  return (
    <ContainerCustom
      padding="18px 13px 18px 18px"
      position="relative"
      bg="#ffffff"
      width="312px"
      margin="0 auto"
      borderRadius="8px 8px 0 0"
    >
      {
        <Notification
          type={`${showNotifyClass} ${isNotifyOpen}`}
          text={
            showNotifyClass === "error"
              ? "Fill up all fields!"
              : "Successfully submitted!"
          }
        />
      }
      <Title>Delivery address</Title>
      <Form onSubmit={submitHandler}>
        <ContainerCustom
          position="relative"
          margin="10px 0 0 0"
        >
          <Input
            onChange={formChangeHandler}
            name="country"
            value={formValue.country}
            id="Country"
          />
          <Label htmlFor="Country">Country</Label>
          <Span position="absolute" right="10px" top="12px">
            <ArrowRight />
          </Span>
        </ContainerCustom>
        <ContainerCustom display="flex" justify="space-between" align="center">
          <ContainerCustom
            width="87.5px"
            margin="10px 0 0 0"
            position="relative"
          >
            <Input
              onChange={formChangeHandler}
              name="flat"
              id="Flat"
              value={formValue.flat}
            />
            <Label htmlFor="Flat">Flat</Label>
          </ContainerCustom>
          <ContainerCustom
            width="87.5px"
            margin="10px 0 0 0"
            position="relative"
          >
            <Input
              onChange={formChangeHandler}
              name="floor"
              id="Floor"
              value={formValue.floor}
            />
            <Label htmlFor="Floor">Floor</Label>
          </ContainerCustom>
          <ContainerCustom
            width="87.5px"
            margin="10px 0 0 0"
            position="relative"
          >
            <Input
              value={formValue.block}
              onChange={formChangeHandler}
              name="block"
              id="Block"
            />
            <Label htmlFor="Block">Block</Label>
          </ContainerCustom>
        </ContainerCustom>
        <Button
          onClick={resetHandler}
          position="absolute"
          top="18px"
          right="12px"
          type="reset"
        >
          <BinIcon />
        </Button>
        <Button type="submit" />
      </Form>
    </ContainerCustom>
  );
};

export { DeliveryForm };
