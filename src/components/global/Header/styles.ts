import { styled } from "@stitches/react";
import Image from "next/image";

export const HeaderWrapper = styled('header', {

})

export const LogoAndLogin = styled('div', {
   display: 'flex',
   justifyContent: "space-between",
   alignItems: 'center',

   padding: '0.5rem',
   backgroundColor: '$gray900',

   img: {
      marginLeft: '4rem',
   },

   div: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      marginRight: '4rem',
   }
})

export const MenuButton = styled(Image, {
   display: 'none',

   variants: {
      windowSize: {
         'bp1': {

         },
         'bp2': {

         },
         'bp3': {
            display: 'inline',
         }
      },
      onClickMenuButton: {
         true: {
            
         },
         false: {

         }
      }
   },
})


export const Navbar = styled('nav', {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   backgroundColor: '$yellow',
   padding: '0.8rem',

   ul: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: '0 3rem',
   },

   a: {
      textDecoration: 'none',
      color: '$gray800',
   },

   variants: {
      windowSize: {
         'bp1': {
            a: {
               fontSize: '1.2rem',
            }
         },
         'bp2': {
            a: {
               fontSize: '0.8rem',
            }
         },
         'bp3': {
            display: 'none',
            a: {
               fontSize: '0.6rem',
            },

            ul: {
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
            }
         }
      }
   }
})

export const MobileNav = styled('ul', {
   display: 'none',
   backgroundColor: '$yellow',

   position: 'fixed',
   height: '100vh',
   width: '100vw',

   listStyle: 'none',
   a: {
      color: '$gray800',
      textDecoration: 'none',
   },

   variants: {
      windowSize: {
         'bp1': {

         },
         'bp2': {

         },
         'bp3': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',

            ul: {
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
            }
         }
      }
   }
})

