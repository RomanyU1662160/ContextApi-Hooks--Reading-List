import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "White")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
`;
