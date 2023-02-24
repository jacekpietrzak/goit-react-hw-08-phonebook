import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { StyledWrapper } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <StyledWrapper>
      <p>Welcome {user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </StyledWrapper>
  );
}
