import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './Global'
import { router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <RouterProvider router={ router } />
      <GlobalStyle />
    </ThemeProvider>
  )
}

