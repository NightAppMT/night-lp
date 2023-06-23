import Image from "next/image";
import { HeaderWrapper, LogoAndLogin, MenuButton, MobileNav, Navbar } from "./styles";

import logoImg from '../../../assets/logo.svg'
import Link from "next/link";
import LoginButton from "../LoginButton";
import { useWindowDimensions } from "@/src/utils/windowWidth";
import menuButton from '../../../assets/menu.svg'
import { hancleClickMenuButton } from "@/src/utils/menuButton";
import { useState } from "react";

export default function Header() {
   const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClickMenuButton = () => {
    setMenuOpen(!isMenuOpen);
  };

   return (
      <HeaderWrapper>
         <LogoAndLogin>
            <Image src={logoImg} width={322} height={70} alt="" />
            <div>
               <LoginButton
                  content={"SOU ALUNO"}
                  href={'#'}
                  bgColor="gray"
               />
               <LoginButton
                  content={"SOU CLIENTE"}
                  href={'#'}
                  bgColor="yellow"
               />
               <button
                  onClick={hancleClickMenuButton}
               >
                  <MenuButton
                     src={menuButton}
                     width={30}
                     height={30}
                     windowSize={useWindowDimensions()}
                     alt="Menu"
                  />
               </button>
            </div>
         </LogoAndLogin>
         <Navbar
            windowSize={useWindowDimensions()}
         >
            <ul>
               <li><Link href={'#'}>Sobre Nós</Link></li>
               <li><Link href={'#'}>Para Você</Link></li>
               <li><Link href={'#'}>Para Empresas</Link></li>
               <li><Link href={'#'}>Portfólio</Link></li>
               <li><Link href={'#'}>Eventos</Link></li>
            </ul>
            <ul>
               <li> <Link href={'#'}>Parcerias</Link></li>
               <li><Link href={'#'}>Instagram</Link></li>
               <li><Link href={'#'}>YouTube</Link></li>
            </ul>
         </Navbar >
         <MobileNav
             windowSize={useWindowDimensions()}
         >
               <li><Link href={'#'}>Sobre Nós</Link></li>
               <li><Link href={'#'}>Para Você</Link></li>
               <li><Link href={'#'}>Para Empresas</Link></li>
               <li><Link href={'#'}>Portfólio</Link></li>
               <li><Link href={'#'}>Eventos</Link></li>
               <li><Link href={'#'}>Parcerias</Link></li>
               <li><Link href={'#'}>Instagram</Link></li>
               <li><Link href={'#'}>YouTube</Link></li>
            </MobileNav>
      </HeaderWrapper >
   )
}