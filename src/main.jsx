
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const theme = extendTheme({
  fonts: {
    heading: "Parisienne",
    body: "Parisienne",
  },
  styles: {
    global: {
      html: {
        bg: "#fff",
      },
      body: {
        fontStyle: "cursive",
        bg: "#fff",
        p: "0px",
        border: "10px solid #fff",
        height: "100vh",
        margin: '0 auto',
      },
      h1: {
        color: "#d60000",
        textWrap: "balance",
        lineHeight: "1.6",
        letterSpacing: "1.33px"
      },
      h2: {
        color: "	#ff2644",
        letterSpacing: "1.33px"
      },
      p: {
        color: "#ff257e",
        letterSpacing: "1.33px"
      },
      li: {
        marginBottom: "20px"
      }
    },
  },
  components: {
    Container: {
      baseStyle: {
        p: "0 10px",
      }
    },
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)