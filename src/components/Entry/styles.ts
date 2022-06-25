import { styled } from '@stitches/react'

export const Container = styled('div', {
  background: '$white',
  color: '$black',
  borderTop: '1px solid $lightGray',
  height: 60,
  transition: 'all 0.4s ease',

  '&:hover': {
    background: '#edecfc',
  },

  variants: {
    active: {
      true: {
        background: '#edecfc',
        height: 'auto',
        margin: '5px 0'
      }
    }
  }
})

export const Row = styled('div', {
  height: 60,
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  alignItems: 'center',
})

export const Item = styled('div', {
  fontSize: 14,

  variants: {
    color: { 
      red: {
        color: '$red'
      },
      green: {
        color: '$green'
      },
    },
  }
})

export const Badge = styled('span', {
  textTransform: 'uppercase',
  display: 'inline-block',
  fontWeight: 500,
  fontSize: 12,
  borderRadius: 5,
  padding: '0px 10px',
  lineHeight: '19px',

  '&::before': {
    content: '•',
    paddingRight: 5,
    fontSize: 18
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$lightPurple',
        color: '$primary',
      },
      red: {
        background: '$lightRed',
        color: '$red'
      },
      green: {
        background: '$lightGreen',
        color: '$green'
      },
    },
  }
})

export const Amount = styled('div', {
  fontWeight: 600
})

export const Toggle = styled('div', {
  cursor: 'pointer',
  textAlign: 'center',
  
  'svg': {
    filter: 'opacity(60%)',
    transform: 'rotate(-90deg)',
    '&:hover': {
      filter: 'none',
    }
  },
  
  variants: {
    active: {
      true: {
        'svg': {
          filter: 'none',
          transform: 'rotate(0)',
        }
      }
    }
  }
})

export const Description = styled('div', {
  transition: 'all 0.2s ease',
  padding: '20px 70px',
  background: '$white',
  borderTop: '2px solid $lightPurple',
  display: 'none',

  variants: {
    active: {
      true: {
        display: 'block'
      }
    }
  },

  'ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,

    'li': {
      fontWeight: 300,
      marginTop: 15,
      display: 'flex',
      fontSize: 14,
      lineHeight: '20px',

      'svg': {
        marginRight: 10
      }
    }
  }
})