import styled from 'styled-components';

export const Divider = styled.hr`
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding};
  border: 1px solid #EBEBEB;
  background-color: #EBEBEB;
`;
