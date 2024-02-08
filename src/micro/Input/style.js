import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  font-family: ${(props) => props.font};
  text-align: ${(props) => props.alignment};
  font-size: ${(props) => props.size}px;
  font-style: ${(props) => props.style};
  color: ${(props) => props.color};
  line-break: ${(props) => props.lineBreak};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
`;
