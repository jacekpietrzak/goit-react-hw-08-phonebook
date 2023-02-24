import styled from 'styled-components';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  padding-top: 50px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 0px;
`;

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1400px;
`;
