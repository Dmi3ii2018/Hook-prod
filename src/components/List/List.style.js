import styled, { css } from 'styled-components';

export const List = styled.ul`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin || '0'};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding-left: 0;
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Noto Sans, Arial, serif"};
  list-style-type: ${({ type }) => type};
  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.primary};

      a {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const ListItem = styled.li`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Noto Sans, Arial, serif"};
  margin: ${({ margin }) => margin || '0'};
`;
