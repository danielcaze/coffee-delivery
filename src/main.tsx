import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyles } from './styles/global'
import { LightTheme } from './styles/themes/Default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
