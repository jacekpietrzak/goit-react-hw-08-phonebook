import styled from 'styled-components';

export const StyledButton = styled.button`
  text-transform: capitalize;
  background-color: #fff;
  border: solid 1px #333;
  border-radius: 5px;
  font-size: medium;
  padding: 3px 9px;
  cursor: pointer;
  transition: background-color ease 150ms, border-color ease 150ms,
    color ease 150ms;

  &:hover {
    color: rgb(120, 30, 30);
    border-color: rgba(236, 30, 30, 0.5);
    background-color: rgba(236, 30, 30, 0.5);
  }
  &:active {
    color: rgb(120, 30, 30);
    border-color: rgba(236, 30, 30, 0.75);
    background-color: rgba(236, 30, 30, 0.75);
  }
`;
