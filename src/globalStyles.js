import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    font-family: 'Overpass', sans-serif;
    height: 100%;
  }
  #root {
    margin: 0;
    padding: 0;
    background: linear-gradient(150deg, #47BFDF, #4A91FF);
    
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
 
export default GlobalStyle;