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
    color: black
  }

  ol, ul{
    list-style: none;
  }

  button {
    cursor: pointer;
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
