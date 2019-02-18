import React from 'react'
import { ThemeProvider } from 'styled-components'

const blue = '#07c'
const lightgray = '#f6f6ff'

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    bluck: '#000e1a',
    white: '#fff',
    blurg: '#007ce0',
    navy: '#004175'
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
  },
}

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>