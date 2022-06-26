import { styled } from '@stitches/react'

export const Container = styled('div', {
  borderRadius: 6,
  border: '1px solid $lightGray',
  position: 'absolute',
  width: '440px',
  background: '$white',
  left: 'calc((1100px - 440px)/2)',
  top: '10%',
  minHeight: '400px',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
})

export const Title = styled('div', {
  fontSize: 16,
  fontWeight: 500,
  borderBottom: '2px solid $lightGray',
  padding: 15,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'svg': {
    cursor: 'pointer',
    filter: 'opacity(60%)',
    '&:hover': {
      filter: 'none',
    }
  }
})