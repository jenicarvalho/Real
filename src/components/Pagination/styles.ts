import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '1100px',
  background: '$lightPrimary',
  alignItems: 'center',
  height: 50,
  borderTop: '1px solid $lightGray',
  padding: '0 10px',
  boxSizing: 'border-box',
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  display: 'flex',
  justifyContent: 'end'
})

export const Item = styled('div', {
  color: '$primary',
  fontWeight: 500,
  fontSize: 12,
  marginRight: 30,
  cursor: 'pointer'
})

export const Arrows = styled('div', {
  cursor: 'pointer',
  color: '$primary',
  fontWeight: 600,
  fontSize: 12,
  marginRight: 10
})