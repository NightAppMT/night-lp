import Image from "next/image";
import { HeaderWrapper, LogoAndLogin, Nav, Navbar, SocialMedias } from "./styles";

import logoImg from '../../../assets/logo.svg'
import Link from "next/link";
import LoginButton from "../LoginButton";

export default function Header() {
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
            </div>
         </LogoAndLogin>
         <Navbar>
            <Nav>
               <ul>
                  <li><Link href={'#'}>Sobre Nós</Link></li>
                  <li><Link href={'#'}>Para Você</Link></li>
                  <li><Link href={'#'}>Para Empresas</Link></li>
                  <li><Link href={'#'}>Portfólio</Link></li>
                  <li><Link href={'#'}>Eventos</Link></li>
               </ul>
            </Nav>
            <SocialMedias>
               <Link href={'#'}>Parcerias</Link>
               <Link href={'#'}>Instagram</Link>
               <Link href={'#'}>YouTube</Link>
            </SocialMedias>
         </Navbar>
      </HeaderWrapper>
   )
}