import styled, { css } from "styled-components";

export const Title = styled.div`
  width: ${({ width }) => width};
  color: ${({ theme, color }) => color || theme.colors.text.main};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: "Mukta", Arial, serif;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  line-height: ${({ lineHeight }) => lineHeight};

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.text.secondary};
    `}
`;

export const Text = styled.p`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ theme, color }) => color || theme.colors.text.main};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "NotoSans"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  overflow: ${({ overflow }) => overflow};
  text-overflow: ${({ textOverflow }) => textOverflow};
  line-height: ${({ lineHeight }) => lineHeight};
  line-height: ${({ lineHeight }) => lineHeight};

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.text.secondary};
    `}
`;

export const Span = styled.span`
  width: ${({ width }) => width};
  color: ${({ theme, color }) => color || theme.colors.primary};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  font-size: ${({ size }) => size};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  border-radius: ${({ borderRadius }) => borderRadius};
  text-align: ${({textAlign}) => textAlign};
  text-decoration: ${({textDecoration}) => textDecoration};
  background-color: ${({ bg }) => bg};
  cursor: ${({ cursor }) => cursor};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Mukta, Arial, serif"};
`;
