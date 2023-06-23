import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { Main } from "./styles";

import ExecutivosBanner from "@/src/components/global/Banner";

import contactUs from '../../assets/contactUs.jpg'
import Image from "next/image";

export default function Home() {
   return(
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <section>
               <Image 
                  src={contactUs}
                  width={805}
                  height={262}
                  alt=""
               />
            </section>
         </Main>
      </Container>
   )
}