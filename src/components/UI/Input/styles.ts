import { styled } from '@stitches/react'

export const Container = styled('div', {
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  border: '1px solid $lightGray',

  'svg': {
    marginRight: 10
  }
})

export const InputStyled = styled('input', {
  width: 350,
  height: 32,
  background: 'transparent',
  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: '$gray',
    fontSize: 12
  }
})
