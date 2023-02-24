import { NavLink } from 'react-router-dom';

import { StyledWrapper } from './AuthNav.styled';

export function AuthNav() {
  return (
    <StyledWrapper>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </StyledWrapper>
  );
}
