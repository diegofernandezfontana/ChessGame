import styled, { css } from "styled-components";

const getComputedStyle = ({ backgroundColor }) => `
  background-color: ${backgroundColor}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  ${props => getComputedStyle(props)}
`;
