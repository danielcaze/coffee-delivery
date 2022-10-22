import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { LightTheme } from './styles/themes/Default'
import { CartProvider } from './contexts/CartContext'

export function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </CartProvider>
  )
}
