import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;

// loading based on https://loading.io/css/
const StyledLoading = styled.div`
    margin: auto;
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid black;
        border-color: black transparent black transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`;

export default StyledLoading;
