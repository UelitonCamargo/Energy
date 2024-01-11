import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './Global'
import { Login } from './pages/Login'

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  )
}

