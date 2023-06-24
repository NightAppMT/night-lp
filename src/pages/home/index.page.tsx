import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { ContactUs, Main } from "./styles";

import ExecutivosBanner from "@/src/components/global/Banner";

import contactUs from '../../assets/contactUs.png'


export default function Home() {
   return(
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <ContactUs>
               
               {/* <ContactForm /> */}
            </ContactUs>
         </Main>
      </Container>
   )
}