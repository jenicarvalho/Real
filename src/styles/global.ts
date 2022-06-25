import { createStitches, globalCss } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      primary: '#6D5BD0',
      lightPrimary: '#F4F2FF',
      lightPurple: '#E9EDF5',
      gray: '#6E6893',
      lightGray: '#D9D5EC',
      black: '#25213B',
      green: '#007F00',
      lightGreen: '#E1FCEF',
      red: '#D30000',
      lightRed: '#FFEDEF'
    },
    space: {
      1: '13px 44px',
      2: '6px 22px',
    },
    fontSizes: {
      1: '14px',
    },
    fonts: {
      inter: 'Inter, apple-system, sans-serif',
    }
  },
})

const globalStyles = globalCss({
  body: {
    backgroundColor: '#F2F0F9',
    margin: 0,
    padding: 0,
    fontFamily: '$inter',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontWeight: 300,

    'time': {
      fontWeight: 200,
      fontSize: 13,
      margin: '0 5px'
    }
  },
})

export { globalStyles }