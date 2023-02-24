import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { StyledNav } from './Nav.styled';

export function Nav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </StyledNav>
  );
}
