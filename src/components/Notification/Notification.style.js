import styled, { css, keyframes } from "styled-components";
import ErrorIcon from "assets/icons/error-icon.svg";
import SuccessIcon from "assets/icons/success-icon.svg";
import WarningIcon from "assets/icons/warn-icon.svg";

const hideNotify = keyframes`
    0% {
        top: 43px;
    }
    100% {
        top: -140px;
    }
`;

const showNotify = keyframes`
    0% {
        top: 0;
    }
    100% {
        top: 43px;
    }
`;

export const NotificationContainer = styled.div`
  .error {
    ${({ theme }) =>
      theme &&
      css`
        background-color: ${theme.colors.notify.error};
        color: ${theme.colors.text.error};

        &::before {
          background-image: url(${ErrorIcon});
        }
      `}
  }

  .success {
    ${({ theme }) =>
      theme &&
      css`
        background-color: ${theme.colors.notify.success};
        color: ${theme.colors.text.success};

        &::before {
          background-image: url(${SuccessIcon});
        }
      `}
  }

  .warning {
    ${({ theme }) =>
      theme &&
      css`
        background-color: ${theme.colors.notify.warning};
        color: ${theme.colors.text.warning};

        &::before {
          background-image: url(${WarningIcon});
        }
      `}
  }

  .close {
    top: -140px;
    animation: ${hideNotify} 0.5s ease;
  }

  .open {
    top: 43px;
    animation: ${showNotify} 0.5s ease;
  }
`;

export const NotificationWrapper = styled.div`
  width: 308px;
  min-height: 52px;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 8px;
  position: absolute;
  top: -143px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
