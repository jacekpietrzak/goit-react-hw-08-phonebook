import { NavLink } from 'react-router-dom';

import { StyledAuthNav } from './AuthNav.styled';

export function AuthNav() {
  return (
    <StyledAuthNav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </StyledAuthNav>
  );
}
