import styled, { css } from "styled-components";

export const AddButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ffbc41;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }

  ${({ big }) =>
    big &&
    css`
      width: 38px;
      height: 38px;

      svg {
        width: 16px;
        height: 16px;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      width: 24px;
      height: 24px;

      svg {
        width: 10px;
        height: 10px;
      }
    `}
`;
