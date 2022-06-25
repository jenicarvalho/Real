import { styled } from '@stitches/react'

export const Container = styled('div', {
  background: '$lightPrimary',
  border: 'none',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',

  'svg': {
    marginRight: 10
  }
})

export const InputStyled = styled('input', {
  width: 350,
  height: 45,
  background: 'transparent',
  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: '$gray',
    fontSize: 12
  }
})
