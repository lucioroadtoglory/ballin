import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body, #root {
    font-family: OpenSansRegular;
    height: 100vh;
  }

  #root {
    overflow: auto;
  }

  button {
    all: unset;
    cursor: pointer;
    text-decoration: none;
  }

  input {
    outline: none;
  }
`;
