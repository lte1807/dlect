import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
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
