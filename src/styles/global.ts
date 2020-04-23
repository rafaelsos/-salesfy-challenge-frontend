import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: rgb(138, 5, 170);
    background-image:linear-gradient(-87deg, rgba(255,255,255,0.1) 1%,rgba(255,255,255,0.08) 10%,rgba(255,255,255,0.03) 20%,rgba(0,0,0,0) 30%,rgba(0,0,0,0.4) 100%);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    height: 100%;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
