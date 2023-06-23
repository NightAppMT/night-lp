import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
   },

   body: {
      backgroundColor: '$gray800',
      '-webkit-font-smoothing': 'antialised',
      lineHeight: 1.6,
   },

   'body, input, textarea, button': {
      fontFamily: 'Barlow',
      fontWeight: 600,
      color: '$white',
   }
})