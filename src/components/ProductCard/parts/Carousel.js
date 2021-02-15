import React, { useMemo } from "react";
import Slider from "react-slick";
import { ContainerCustom } from "components";
import styled from "styled-components";
import SliderDot from "assets/icons/slider-dot.svg";

const CarouselContainer = styled.div`
  &&& {
    .slick-slider {
      display: flex;
      align-items: center;
      min-height: 180px;
    }

    .slick-dots li {
      margin: 0;
    }

    .slick-dots li.slick-active button:before {
      content: "";
      display: inline-block;
      background-image: url(${SliderDot});
      background-repeat: no-repeat;
      background-position: center;
      overflow: visible;
      opacity: 1;
    }
  }
`;

const Carousel = ({ image }) => {
  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }),
    []
  );
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {new Array(4).fill().map(() => {
          return (
            <div key={Math.random()}>
              <ContainerCustom display="flex" justify="center">
                <img src={require(`assets/img${image}`).default} alt="main item" />
              </ContainerCustom>
            </div>
          );
        })}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
