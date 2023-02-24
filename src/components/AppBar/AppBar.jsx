import { Nav } from 'components/Nav/Nav';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { StyledHeader, StyledHeaderWrapper } from './AppBar.styled';
import { StyledContainer } from 'layouts/Layout.styled';

export function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderWrapper>
          <Nav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledHeaderWrapper>
      </StyledContainer>
    </StyledHeader>
  );
}
