import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyles'
import { theme } from '@styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}

export default App
