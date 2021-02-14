import React, { useEffect, useRef, useState } from "react";
import { ContainerCustom, Title } from "components";
import { NavigationContainer } from "./Navigation.style";

const Navigation = () => {
  const ticking = useRef(false);
  const isFirstrender = useRef(true);
  const [isNavBarHidden, setNavBarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      let lastKnownScrollPosition = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(function () {
          if (lastKnownScrollPosition > 40 && isNavBarHidden === false) {
            setNavBarHidden(true);
            isFirstrender.current = false;
          }
          if (lastKnownScrollPosition < 40 && isNavBarHidden === true) {
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
  }, [isNavBarHidden]);

  return (
    <NavigationContainer position="relative">
      <ContainerCustom
        width="100%"
        height="79px"
        bg="#FFB000"
        textAlign="center"
        position="fixed"
        borderRadius="0 0 8px 8px"
        top="0"
        zIndex="10"
      >
        <Title size="24px" lineHeight="42px" weight="700" color="#333333">
          Navigation
        </Title>
      </ContainerCustom>
      <ContainerCustom margin="79px 0 0 0" />
      <ContainerCustom
        width="100%"
        height="43px"
        bg="#FFB000"
        borderRadius="0 0 8px 8px"
        top="70px"
        position="fixed"
        zIndex="-1"
        className={!isFirstrender ? "" : isNavBarHidden ? "close" : "open" }
      />
    </NavigationContainer>
  );
};

export { Navigation };
