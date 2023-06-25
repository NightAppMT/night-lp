import { styled } from "@stitches/react";

export const Form = styled('form', {
   height: '100%',
   margin: 'auto',
   padding: '2rem',

   variants: {
      windowSize: {
         bp1: {

         },
         bp2: {
            input: {
               fontSize: '1rem',
               padding: '.1rem',
               width: '100%',
            },
            fontSize: '1rem',
         },
         bp3: {
            padding: '1rem',
            fontSize: '0.8rem',
            input: {
               fontSize: '0.8rem',
               padding: '0rem',
               borderRadius: 6,
            },
         }
      }
   }
})

export const NameAndPhone = styled('div', {
   display: 'flex',
   gap: '1rem',

   variants: {
      windowSize: {
         bp1: {

         },
         bp2: {

         },
         bp3: {
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
         }
      }
   }
})

export const ContactInput = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   input: {
      padding: '.2rem',
      borderRadius: 8,
      backgroundColor: '$black',
      color: '$yellow',
      fontSize: '1.2rem',

      '&:-webkit-autofill,&:-webkit-autofill:hover, &:-webkit-autofill:focus': {
         '-webkit-text-fill-color': '#ffff44',
         '-webkit-box-shadow': '0 0 0px 1000px #000 inset',
      },
   },
})
