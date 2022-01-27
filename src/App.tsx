import { ThemeProvider } from 'styled-components';
import { StyledApp, StyledAppMain, StyledAppMainContain } from './App.styled';
import {
  FilterGroup,
  Footer,
  Header,
  ItemContainer,
  MobileMenu,
  ShoppingCart,
} from './components/components';
import { DynamicFlexChild } from './components/styles/common.styled';
import {useMobile} from './hooks/useMobile';
import theme from './theme';
 
function App() {
  const isMobile = useMobile();
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <div id='jump-point'></div>
        <Header />
        <StyledAppMain>
          <StyledAppMainContain>
            {isMobile ? <MobileMenu /> : <FilterGroup /> }
          </StyledAppMainContain>
          <DynamicFlexChild>
            <ItemContainer />
          </DynamicFlexChild>
          {!isMobile && <StyledAppMainContain>
            <ShoppingCart />
          </StyledAppMainContain>}
        </StyledAppMain>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
