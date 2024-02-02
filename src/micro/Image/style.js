import styled from "styled-components";

export const ImageComponent = styled.img`
    font-family: ${(props) => props.font};
    text-align: ${(props) => props.alignment};
    font-size: ${(props) => props.size}px;
    font-style: ${(props) => props.style};
    color: ${(props) => props.color};
    line-break: ${(props) => props.lineBreak};

`;
