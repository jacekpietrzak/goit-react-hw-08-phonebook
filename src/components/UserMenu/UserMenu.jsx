import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { StyledWrapper } from './UserMenu.styled';
import { Button } from '@mui/material';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <StyledWrapper>
      <p>Welcome {user.name}</p>
      <Button
        color="error"
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Log out
      </Button>
    </StyledWrapper>
  );
}
