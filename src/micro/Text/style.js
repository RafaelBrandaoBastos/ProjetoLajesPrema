import styled from "styled-components";

export const TextComponent = styled.p`
    font-family: ${(props) => props.font};
    text-align: ${(props) => props.alignment};
    font-size: 25px;
    font-style: ${(props) => props.style};
    color: ${(props) => props.color};
    line-break: ${(props) => props.lineBreak};
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width};
    display: flex;
    outline-style: solid;
    margin: 0px;
    padding: 0px;
`;
