import styled from "styled-components";

export const TextComponent = styled.p`
    font-family: ${(props) => props.font};
    text-align: ${(props) => props.alignment};
    font-size: ${(props) => props.size};
    font-style: ${(props) => props.style};
    color: ${(props) => props.color};
    line-break: ${(props) => props.lineBreak};
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width};
    display: flex;
    align-items: center;
    justify-content: center;
    outline-style: solid;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    text-align: ${(props) => props.align};
`;
