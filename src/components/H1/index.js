import styled from "styled-components";

export default styled.h1`
  text-align: center;
  font-family: "Gotham";
  font-weight: 500;
  font-size: 36px;
  color: ${props => props.color || "#000"};
  margin-top: 0;
`;
