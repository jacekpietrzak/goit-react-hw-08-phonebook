import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 15px;

  a {
    color: #111;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .active {
    color: red;
    text-decoration: underline;
  }
`;
