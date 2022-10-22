import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navbar-height-desktop: 104px;

    --title-xl: 4.8rem;
    --title-l: 3.2rem;
    --title-m: 2.4rem;
    --title-s: 2rem;
    --title-xs: 1.8rem;

    --text-l: 2rem;
    --text-m: 1.6rem;
    --text-sm: 1.4rem;
    --text-s: 1.2rem;

    --button-g: 1.4rem;
    --button-s: 1.2rem;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
  }

  html, button {
    font-family: "Roboto", sans-serif;
  }

  strong, p {
    line-height: 1.3;
  }

  html {
    font-size: 62.5%;
  }

  button {
    border: 0;
    cursor: pointer;
    line-height: 1.6;
    background: transparent;
  }
`
