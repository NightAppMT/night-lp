import { styled } from "@stitches/react";

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
      gap: '1rem',

      marginRight: '4rem',
   }
})

export const Navbar = styled('div', {
   display: 'flex',
   justifyContent: 'space-between',
   
   backgroundColor: '$yellow',
   padding: '0.8rem',
})

export const Nav = styled('nav', {
   marginLeft: '3rem',
   
   ul: {
      display: 'flex',
      gap: '2rem',

      listStyleType: 'none',

      a: {
         textDecoration: 'none',
         color: '$gray800',
         fontSize: '1rem',
      }
   }
})

export const SocialMedias = styled('div', {
   display: 'flex',
   gap: '2rem',
   marginRight: '3rem',
   
   a: {
      textDecoration: 'none',
      color: '$gray800',
   }
})