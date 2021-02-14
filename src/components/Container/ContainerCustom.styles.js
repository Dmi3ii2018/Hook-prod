import styled, { css } from "styled-components";

export const ContainerCustom = styled.div`
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  background: ${({ bg }) => bg};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  flex-grow: ${({ grow }) => grow};
  margin: ${({ margin }) => margin};
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  overflow: ${({ overflow }) => overflow};
  z-index: ${({ zIndex }) => zIndex};
  text-align: ${({ textAlign }) => textAlign};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: border-box;
  ${({ borderColor, borderRadius }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius};
    `}

  ${({ active }) =>
    active &&
    css`
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(1);
    `}

  &::-webkit-scrollbar {
    width: 10px;
    display: none;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    transition: all ease-in-out 0.3s;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    cursor: grab;
    background: #999;
  }
`;
