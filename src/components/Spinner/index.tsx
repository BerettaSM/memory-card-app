import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotateZ(0turn);
    }
    50% {
        transform: rotateZ(1turn) scale(0.8);
    }
    100% {
        transform: rotateZ(2turn);
    }
`;

const Spinner = styled.div`
    position: absolute;
    height: 96px;
    width: 96px;
    inset: 0;
    margin: auto;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        border: 4px solid transparent;
        border-block-color: var(--THEME_COLOR_04);
        border-radius: 50%;
        animation: ${spin} 2s infinite forwards;
    }
`;

export default Spinner;
