import { styled } from '@stitches/react'

export const Container = styled('div', {
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  border: '1px solid $lightGray',
  background: '$white',
  color: '$gray',

  'svg': {
    marginRight: 10
  }
})

export const InputStyled = styled('input', {
  width: 350,
  height: 32,
  background: '$white',
  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: '$gray',
    fontSize: 12
  }
})
