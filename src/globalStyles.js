import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #root {
    margin: 0;
    padding: 0;
    background: linear-gradient(150deg, #5d69f6, #f5c5fb);
    
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
 
export default GlobalStyle;