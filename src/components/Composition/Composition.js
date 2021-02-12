import React from 'react'
import Nutrition from "./Nutrition/Nutrition";
import Ingridients from "./Ingridients/Ingridients";
import Other from "./Other/Other";
import { ContainerCustom, Divider } from "components"

const Composition = ({ composition }) => {
    const { nutrition, ingredients, other } = composition;
    return (
        <ContainerCustom bg="#ffffff" margin="24px" padding="15px">
            <Nutrition nutrition={nutrition} />
            <Divider margin="17px 0" />
            <Ingridients ingredients={ingredients} />
            <Divider margin="17px 0" />
            <Other other={other} />
        </ContainerCustom>
    )
}

export { Composition }
