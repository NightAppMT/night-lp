import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { Banner, Main } from "./styles";

import banner from '../../assets/banner.png'
import ExecutivosBanner from "@/src/components/global/Banner";

export default function Home() {
   return(
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
         </Main>
      </Container>
   )
}