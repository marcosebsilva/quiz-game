import styled, { keyframes } from 'styled-components';

const innerAnimation = keyframes`
    0% {
        background-color: green;
        width: 100%;
    }
    50% {
        background-color: yellow;
        width: 60%;
    }
    70% {
        background-color: orange;
        width: 30%;
    }
    100% {
        width: 0;
    }
`;

export const StyledOuterBar = styled.div`
    width: 100%;
    height: 25px;
    border-radius: 25px;
    overflow: hidden;
    background-color: grey;
`;

export const StyledInnerBar = styled.div`
    background-color: red;
    height: 100%;
    border-radius: 25px;
    width: 0%;
    animation: ${innerAnimation} ${(props) => `${props.duration}s`} linear;
    animation-play-state: ${(props) => props.stopCounter && 'paused'};
`;
