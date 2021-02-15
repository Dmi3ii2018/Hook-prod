import React, { useEffect, useRef, useState } from "react";
import { ContainerCustom, Title, Span } from "components";
import { NavigationContainer } from "./Navigation.style";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { ReactComponent as BackArrowIcon } from "assets/icons/back-arrow.svg";

const SCROLL_ANIMATION_TARGET = 35;

const NavigationComponent = ({ title, history, location }) => {
  const ticking = useRef(false);
  const [isNavBarHidden, setNavBarHidden] = useState(false);
  const [isFirstrender, setFirstrender] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let lastKnownScrollPosition = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(function () {
          if (lastKnownScrollPosition > SCROLL_ANIMATION_TARGET) {
            setNavBarHidden(true);
            setFirstrender(false);
          }
          if (lastKnownScrollPosition < SCROLL_ANIMATION_TARGET) {
            setNavBarHidden(false);
          }
          ticking.current = false;
        });

        ticking.current = true;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backClickHandler = () => {
      if(location.pathname === "/") {
        return
      }
      history.goBack()
  }

  return (
    <NavigationContainer position="relative">
      <ContainerCustom
        width="360px"
        height="50px"
        bg="#FFB000"
        textAlign="center"
        position="fixed"
        borderRadius="0 0 8px 8px"
        top="0"
        zIndex="10"
      >
        <Span position="absolute" left="17px" top="10px">
          <BackArrowIcon onClick={backClickHandler} />
        </Span>
        <Title size="24px" lineHeight="42px" weight="700" color="#333333">
          {title}
        </Title>
      </ContainerCustom>
      <ContainerCustom margin="50px 0 0 0" />
      <ContainerCustom
        width="360px"
        height="50px"
        bg="#FFB000"
        borderRadius="0 0 8px 8px"
        top="45px"
        position="fixed"
        zIndex="0"
        className={isFirstrender ? "" : isNavBarHidden ? "close" : "open"}
      />
    </NavigationContainer>
  );
};

NavigationComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export const Navigation = withRouter(NavigationComponent);
