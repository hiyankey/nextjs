import { styled } from '@/stitches.config'

export const Button = styled('button', {
  borderRadius: '9999px',

  '&:hover': {
    boxShadow: '0 2px 2px #00000010, 0 6px 6px #00000010',
    transform: 'translateY(-2px)',
  },
  variants: {
    size: {
      sm: {
        fontSize: '14px',
        padding: '6px 18px ',
      },
      lg: {
        fontSize: '14px',
        padding: '8px 20px ',
      },
    },
    variant: {
      primary: {
        backgroundColor: '#000',
        color: '#fff',
      },
      secondary: {
        backgroundColor: '#00000010',
        color: '#000',
        border: '0.5px solid #00000010',
      },
    },
  },
})
