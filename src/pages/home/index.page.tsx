import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { ContactUs, ContactUsImage, Jobs, Main, StayIn } from "./styles";

import ExecutivosBanner from "@/src/components/global/Banner";
import ContactForm from "@/src/components/page/Home/ContactUs";
import Image from "next/image";

import ventureBuilder from '../../../public/venture-builder.png'
import arte1 from '../../../public/stay-in-arte1.png'
import arte2 from '../../../public/stay-in-arte2.png'

import arteNossosServicos from '../../../public/arte-nossos-servicos.png'

import logoImg from '../../../public/logo.svg'

import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function Home() {
   return (
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />

            <ContactUs>
               <ContactUsImage>
                  <p>QUER FALAR DIRETAMENTE CONOSCO</p>
                  <span>PREENCHA</span>
               </ContactUsImage>
               <ContactForm />
            </ContactUs>

            <StayIn
               windowSize={useWindowDimensions()}
            >
               <h1>FIQUE POR DENTRO</h1>
               <Image
                  src={ventureBuilder}
                  sizes="100vw"
                  alt=""
               />
               <div>
                  <Image
                     src={arte1}
                     sizes="100vw"
                     alt=""
                  />
                  <Image
                     src={arte2}
                     sizes="100vw"
                     alt=""
                  />
               </div>
            </StayIn>

            <Jobs>
               <Image
                  src={logoImg}
                  sizes="100vw"
                  alt=""
               />
               <div>
                  <Image
                     src={arteNossosServicos}
                     sizes="100vw"
                     alt=""
                  />
               </div>
            </Jobs>
         </Main>
      </Container>
   )
}