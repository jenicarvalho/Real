import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '$white',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  padding: 15,
})

export const Filters = styled('div', {
  display: 'flex',
  alignItems: 'center',

  'button': {
    marginRight: 20
  }
})

