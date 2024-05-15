import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Nanum Gothic Coding", monospace;
    src: url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *{
    box-sizing: border-box;
    
  }

  html {
    font-size: 62.5%;
  }

  html, body{
    background-color: white;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, button{
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    text-decoration: none !important;
    color: black;
  }

  ol, ul{
    list-style: none;
  }

  button {
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 0 0.3px #ffffff  inset,
        0 0 0 0.1px rgba(255,255,255,0.15) inset,
        0 8px 0 0 rgba(0, 0, 0, .9),
        0 8px 0 1px rgba(0,0,0,.4),
        0 8px 8px 1px rgba(0,0,0,0.5);
    &:active {
      top: 7px;
      box-shadow: 0 0 0 1px #6191C2 inset,
        0 0 0 2px rgba(255,255,255,0.15) inset,
        0 0 0 1px rgba(0,0,0,0.4);
    }
  }

  input {
    border: none;
    padding: none;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyle;
