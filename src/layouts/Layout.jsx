import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Loading } from 'components/Loading/Loading';

import {
  StyledApp,
  StyledMain,
  StyledSection,
  StyledContainer,
} from './Layout.styled';

export function Layout() {
  return (
    <StyledApp>
      <AppBar />
      <StyledMain>
        <StyledContainer>
          <StyledSection>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </StyledSection>
        </StyledContainer>
      </StyledMain>
    </StyledApp>
  );
}
