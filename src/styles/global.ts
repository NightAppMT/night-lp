import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
   },

   body: {
      backgroundColor: '$gray',
      '-webkit-font-smoothing': 'antialised',
      lineHeight: 1.6,
   },

   'body, input, textarea, button': {
      color: '$white',
   }
})