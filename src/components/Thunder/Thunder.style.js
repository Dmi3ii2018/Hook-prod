import styled from "styled-components";
import ThunderIcon from "assets/icons/thunder.svg"

export const Thunder = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FFBC41;
    display: inline-block;
    box-shadow: 0px 2px 10px rgba(255, 176, 0, 0.5);
    background-image: url(${ThunderIcon});
    background-repeat: no-repeat;
    background-position: center;
`;
