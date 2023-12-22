import styled from "styled-components";

export const TextComponent = styled.p`
  font-family: ${(props) => props.font};
  text-align: ${(props) => props.alignment};
  font-size: ${(props) => props.size}px;
  font-style: ${(props) => props.style};
  font-color: ${(props) => props.color};
  line-break: ${(props) => props.lineBreak};
`;
