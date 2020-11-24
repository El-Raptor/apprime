import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  html {
    font-size: 62.5%;
  }
  
  body {
      margin: 0;
      background-color: #f6f6f6;
  }

  .page-content {
    position: relative;
    min-height: 100vh;
  }
`;