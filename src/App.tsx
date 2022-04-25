import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/GlobalStyles'
import { theme } from '@styles/Theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Hello world</h1>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
