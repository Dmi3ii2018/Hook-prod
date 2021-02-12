import styled from 'styled-components';

export const Img = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};

  cursor: ${({ pointer }) => `${pointer}`};
`;
