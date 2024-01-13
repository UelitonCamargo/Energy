import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './Global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

