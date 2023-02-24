import styled from 'styled-components';

export const StyledAuthNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

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
