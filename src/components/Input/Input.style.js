import styled, { css } from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "48px"};
  padding: ${({ padding }) => padding || "16px 0 0 13px"};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  color: ${({ color }) =>
    color || "#333333"};
  background: ${({ bgInput }) => bgInput};
  border: 1px solid #EBEBEB;
  outline: none;
  box-shadow: ${({ boxshadow }) => boxshadow};
  border-radius: 8px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => size || "16px"};
  line-height: 140%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borders.light} !important;
  & + label {
      font-size: 12px;
      top: 3px;
  }
}

  ${({ theme, overflow }) =>
    overflow &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  width: ${({ width }) => width};
  color: ${({ color }) => color || "#878786"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  font-size: ${({ size }) => size || "14px"};
  position: ${({ position }) => position || "absolute"};
  right: ${({ right }) => right};
  top: ${({ top }) => top || "13px"};
  left: ${({ left }) => left || "13px"};
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ bg }) => bg};
  cursor: ${({ cursor }) => cursor};
  line-height: ${({ lineHeight }) => lineHeight || "19px"};
  font-weight: ${({ weight }) => weight || "400"};
  font-family: ${({ family }) => family || "Noto Sans, Arial, serif"};
`;
