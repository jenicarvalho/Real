import { styled } from '@stitches/react'

export const Container = styled('div', {
  background: '#F7F8FA',
  borderRadius: 6,
  border: '1px solid $lightGray',
  position: 'absolute',
  width: '440px',
  left: 'calc((1100px - 440px)/2)',
  top: '0%',
  minHeight: '400px',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
})

export const Title = styled('div', {
  background: '$white',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
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

export const Content = styled('div', {
  padding: '0px 20px',

  'label': {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 8,
    display: 'inline-block',
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'baseline',
  gridGap: '10px',

  '> div': {
    width: '194px'
  }
})