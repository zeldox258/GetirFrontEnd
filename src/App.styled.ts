import styled from 'styled-components';
import { mobileQuery } from './components/styles/mobile-query';

export const StyledApp = styled.div`
  padding: 0 104px;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  padding-bottom: 40px;
 
  @media ${mobileQuery} {
    padding: 0 0 40px;
  }
`;

export const StyledAppMain = styled.main`
  display: flex;
  @media ${mobileQuery} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledAppMainContain = styled.div``;
