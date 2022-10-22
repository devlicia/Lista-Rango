import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background: ${props => props.theme.white};
  width: 100%;
  height: 100%;
  }
`
