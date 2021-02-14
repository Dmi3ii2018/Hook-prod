import styled from 'styled-components';

export const Icon = styled.span`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;

  cursor: ${({ pointer }) => `${pointer}`};
`;
