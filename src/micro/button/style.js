import styled from "styled-components";

export const Button = styled.button`
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};
    font-family: ${(props) => props.font};
    font-size: ${(props) => props.size}px;
    font-style: ${(props) => props.style};
`;
