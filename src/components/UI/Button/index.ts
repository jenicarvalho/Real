import { styled } from '@stitches/react'

export const Button = styled('button', {
  cursor: 'pointer',
  border: '1px solid transparent',
  background: '$white',
  borderRadius: 6,
  fontSize: 16,
  padding: 8,
  color: '$black',
  display: 'flex',
  alignItems: 'center',
  transition: 'all .3s ease-in-out',

  'svg': {
    marginRight: 5,
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: 'white',
        '&:hover': {
          backgroundColor: '$darkPrimary',
        },
      },
      secondary: {
        color: '$darkGray',
        backgroundColor: 'transparent',
        borderColor: '$lightGray',
        '&:hover': {
          borderColor: '$primary',
          backgroundColor: '$lightPrimary',
        },
      },
    },
  },

  '&:active': {
    boxShadow: '3px 3px 0px #bfbdf1, -3px -3px 0px #bfbdf1, 3px -3px 0px #bfbdf1, -3px 3px 0px #bfbdf1'
  }

})