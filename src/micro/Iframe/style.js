import styled from "styled-components";

export const IframeComponent = styled.iframe`
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight}%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
