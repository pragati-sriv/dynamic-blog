import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    margin: 5px;
  }
`;
