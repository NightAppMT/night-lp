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

export const ExecutivosLogo = styled('div', {
   display: 'flex',
   justifyContent: 'center',
   margin: '3rem 0',
})

export const Jobs = styled('section', {
   display: 'flex',
   justifyContent: 'space-between',
   backgroundColor: '$yellow',
   margin: '0 6rem',
   borderRadius: 30,

   // padding: '0 5rem',
   fontSize: '1.5rem',
   color: '$black',

   p: {
      fontWeight: 400,
      maxWidth: 280,
   },
})

export const OurJobsArt = styled('div', {
   img: {
      padding: '1rem 1rem 0.7rem 1rem',
   }
})

export const ImgSection = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   paddingRight: '2rem',
   
   div: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },

   img: {
      // width: '80%',
      // height: 'auto',
   }
})