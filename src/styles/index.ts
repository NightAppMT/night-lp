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

         gray900: '#0e0e0e',
         gray800: '#212121',
         yellow: '#ffff44'
      }
   }
})