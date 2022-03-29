import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica', sans-serif;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
