import React, { useMemo } from "react";
import Slider from "react-slick";
import ProductImage from "assets/img/main-item.png";
import { ContainerCustom } from "components";

const Carousel = () => {
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }),
    []
  );
  return (
    <Slider {...settings}>
      {new Array(4).fill(ProductImage).map((image) => {
        return (
          <div key={Math.random()}>
            <ContainerCustom display="flex" justify="center">
              <img src={image} alt="main item" />
            </ContainerCustom>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
