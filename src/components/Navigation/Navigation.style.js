import styled, { keyframes } from "styled-components";

const hideNavbar = keyframes`
    0% {
        top: 45px
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
        top: 45px
    }
`;

export const NavigationContainer = styled.div`
  position: ${({ position }) => position};

  .open {
    top: 45px;
    animation: ${showNavbar} 0.5s ease;
  }

  .close {
    top: 0;
    animation: ${hideNavbar} 0.5s ease;
  }
`;
