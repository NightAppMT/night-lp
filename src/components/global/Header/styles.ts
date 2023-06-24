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

export const DesktopNav = styled('nav', {
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

export const MobileNav = styled('nav', {
   backgroundColor: '$yellow',
   width: '100%',
   padding: '0.5rem 0',

   ul: {
      transform: 'translateX(-100%)',
      listStyle: 'none',

      height: '100vh',
      width: '100vw',

      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
   },

   a: {
      textDecoration: 'none',
      color: '$gray800',
   },

   variants: {
      windowSize: {
         bp1: {

         },
         bp2: {

         },
         bp3: {
            ul: {
               position: 'fixed',
               display: 'flex',
               backgroundColor: '$yellow',
            }
         }
      },

      isMenuOpen: {
         true: {
            position: 'fixed',

            ul: {
               transform: 'translateX(0%)',
               display: 'flex',
            }
         },
         false: {
            ul: {
               display: 'none',
            }
         }
      }
   }
})

export const MenuButton = styled('button', {
   display: 'none',
   background: 'transparent',
   border: 0,
   padding: '0.5rem',
   cursor: 'pointer',

   '&:hover': {
      scale: '1.10',
   },

   '&:active': {
      scale: '0.95',
   },

   variants: {
      windowSize: {
         'bp1': {

         },
         'bp2': {

         },
         'bp3': {
            display: 'block',
         }
      },
   },
})