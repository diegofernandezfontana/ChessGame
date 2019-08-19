import styled, { css } from 'styled-components';

const getComputedStyle = ({ backgroundColor, isTarget }) => `
  background-color: ${backgroundColor}
  border: ${isTarget ? '2px solid red;' : 'none'}
`;

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  ${props => getComputedStyle(props)}
`;
