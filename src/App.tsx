import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
