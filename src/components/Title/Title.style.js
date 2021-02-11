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
  font-family: ${({ family }) => family || "Mukta, Arial, serif"};
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
  color: ${({ theme, color }) => color || theme.colors.primary};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Mukta, Arial, serif"};
`