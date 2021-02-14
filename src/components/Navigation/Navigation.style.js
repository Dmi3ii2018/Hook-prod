import styled, { keyframes } from "styled-components";

const hideNavbar = keyframes`
    0% {
        top: 70px
    }
    100% {
        top: 0;
    }
`;

const showNavbar = keyframes`
    0% {
        top: 0;
    }
    100% {
        top: 70px
    }
`;

export const NavigationContainer = styled.div`
  position: ${({ position }) => position};

  .open {
    top: 70px;
    animation: ${showNavbar} 0.5s ease;
  }

  .close {
    top: 0;
    animation: ${hideNavbar} 0.5s ease;
  }
`;
