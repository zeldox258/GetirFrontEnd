import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  transition: inherit;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
