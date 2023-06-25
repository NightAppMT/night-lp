import { styled } from "@stitches/react";
import Image from "next/image";

export const Main = styled('main', {

})

export const Banner = styled(Image, {
   width: '100%',
   height: 'auto',
   padding: '0.1rem 2rem 1.5rem',
})

export const ContactUs = styled('section', {
   display: 'flex',

   backgroundColor: '$yellow',
   color: '$black',
   fontWeight: 700,
})

export const ContactUsImage = styled('div', {
   minWidth: '50%',
   height: 'auto',
   backgroundImage: "url('https://images.pexels.com/photos/5313169/pexels-photo-5313169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   backgroundSize: 'cover',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',

   p: {
      lineHeight: 1.2,
      fontSize: '3vw',
      textAlign: 'center',
      margin: '0 2rem'
   },

   span: {
      textAlign: 'center',
      fontSize: '2vw',
   },

   'p, span': {
      color: '$white',
   }
})

export const StayIn = styled('section', {
   backgroundColor: '$yellow',
   color: '$black',
   fontWeight: 700,
   marginTop: '1rem',

   padding: '2rem',
   img: {
      width: '100%',
      height: 'auto',
      padding: '0.4rem 1rem',
   },

   div: {
      display: 'flex',
      gap: '1rem',
   },

   variants: {
      windowSize: {
         bp1: {
            fontSize: '2rem',
         },
         bp2: {
            fontSize: '1.5rem',
            padding: '1rem',
         },
         bp3: {
            fontSize: '0.8rem%',
            padding: '0.5rem',

            div: {
               flexDirection: 'column',
            }
         }
      }
   }
})

export const Jobs = styled('section', {
   display: 'flex',
   backgroundColor: '$yellow',

   padding: '0 5rem',
   fontSize: '1.5rem',
   color: '$black',
   
   '& > img': {
      width:'30rem',
   },

   div: {
      backgroundColor: '$yellow',
      borderRadius: 16,
      padding: '1rem',
   },

   footer: {
      '& > div': {
         display: 'flex',
         justifyContent: 'flex-end',
         alignItems: 'center',      
      },

      p: {
         
      }
   }
})