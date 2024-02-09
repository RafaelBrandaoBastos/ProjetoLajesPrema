import styled from "styled-components";

export const ImageComponent = styled.img`
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight}%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
