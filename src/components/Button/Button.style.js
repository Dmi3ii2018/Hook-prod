import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  background: ${({ background }) => background || "transparent"};
  color: ${({ color }) => color || "#000"};
  padding: ${({ padding }) => padding || '10px 12px'};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin || '0'};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: center;
  font-weight: ${({ weight }) => weight};
  border-radius: 10px;
  border: none;
  box-shadow: ${({ shadow }) => shadow};
  font-size: ${({ size }) => size};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;