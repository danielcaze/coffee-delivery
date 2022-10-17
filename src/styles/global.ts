import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navbar-height-desktop: 104px;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
  }

  html {
    font-size: 62.5%;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`