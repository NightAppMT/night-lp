import { styled } from "@stitches/react";

export const Form = styled('form', {
   height: '100%',
   margin: 'auto',

   footer: {
      display: 'flex',
      gap: '3rem',
   }
})

export const ContactInput = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   input: {
      padding: '0.2rem',
      borderRadius: 8,
      backgroundColor: '$black',
      color: '$yellow',
      fontSize: '1.2rem',
   }
})