import { createStitches } from '@stitches/react'

export const { globalCss, getCssText, styled } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
  },
})

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box' },
  html: { fontFamily: '$system' },
})
