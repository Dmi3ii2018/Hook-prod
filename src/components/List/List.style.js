import styled, { css } from 'styled-components';

export const List = styled.ul`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin || '0'};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Noto Sans, Arial, serif"};
  list-style-type: ${({ type }) => type};

  a {
    color: ${({ color }) => color};
  }
`;

export const ListItem = styled.li`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family || "Noto Sans, Arial, serif"};
  margin: ${({ margin }) => margin || '0'};

  
`;
