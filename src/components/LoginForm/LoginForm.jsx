import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { StyledForm } from './LoginForm.styled';
import { Button, TextField } from '@mui/material';

export function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        name="email"
      />

      <TextField
        required
        id="outlined-required"
        label="Password"
        type="password"
        name="password"
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </StyledForm>
  );
}
