import { createStitches } from '@stitches/react' 

export const {
   config,
   styled,
   css,
   globalCss,
   keyframes,
   getCssText,
   theme,
   createTheme,
} = createStitches({
   theme: {
      colors: {
         black: '#000',
         white: '#fff',

         gray: '#0e0e0e',
         yellow: '#ffff44'
      }
   }
})