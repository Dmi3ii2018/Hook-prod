import styled, { keyframes } from "styled-components";
import { ContainerCustom } from "components";

const hideAnimation = keyframes`
    0% {
        height: 196px;
    }
    100% {
        height: 0;
    }
`;

const showAnimation = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 196px;
    }
`;

const hideArrow = keyframes`
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(180deg)
    }
`;

const showArrow = keyframes`
    0% {
        transform: rotate(180deg)
    }
    100% {
        transform: rotate(0)
    }
`;

export const CaloriesContainer = styled(ContainerCustom)`
  .open {
    height: 196px;
    animation: ${showAnimation} 0.5s ease;
    overflow: hidden;
  }

  .close {
    height: 0;
    overflow: hidden;
    animation: ${hideAnimation} 0.5s ease;
  }
`;

export const ArrowContainer = styled(ContainerCustom)`
  .open {
    transform: rotate(0);
    animation: ${showArrow} 0.5s ease;
  }

  .close {
    transform: rotate(180deg);
    animation: ${hideArrow} 0.5s ease;
  }
`;
