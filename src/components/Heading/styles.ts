import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '1100px',
  background: '$lightPrimary',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  alignItems: 'center',
  height: 45,
  borderTop: '1px solid $lightGray',
  padding: '0 10px',
  boxSizing: 'border-box',

})

export const Item = styled('div', {
  color: '$primary',
  fontWeight: 500,
  fontSize: 12,
})