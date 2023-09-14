import {
  Container,
  ImgContainer,
  Main,
  Menu,
  ResponsiveIframe,
  Section2,
  Section3,
  Section4,
  TextWithImg,
  TextWithImg2,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

import Circle from "@/components/Page/home/Circle";
import FormComponent from "@/components/Page/home/Form";
import LpHeaderComponent from "@/components/Page/home/Header";

export default function Home() {
  return (
    <Container>
      <LpHeaderComponent />
      <Main>
        <Section2>
          <div className="line2">
            <Image src={"/lineGroup2.svg"} width={1244} height={1179} alt="" />
          </div>
          <div className="section-2-content">
            <Image
              src={
                "/ArteSiteExecutivos.svg"
              }
              width={1260}
              height={750}
              alt=""
              className="sectionImg"
            />
            <TextWithImg>
              <div className="title">
                <h2>Quem somos</h2>
                <Circle top={11} left={16} />
                <Circle top={11} rigth={16} />
              </div>
              <div className="content">
                <div className="text">
                  <p>
                    Nosso foco é mudar... conectar pessoas, mudar o social,
                    fazer com que novas amizades aconteçam, que novos amores
                    sejam possíveis, novos momentos e experiências felizes sejam
                    realizadas por meio da ajuda da NightApp, sempre pensando em
                    ambas as partes pois compreendemos que todo mundo tem que
                    sair ganhando, essa é a magia do mundo das Startups, sendo
                    assim, criamos uma Startup que ajuda empresas e usuários a
                    mudarem e unirem o off-line com o on-line, e somos pioneiros
                    neste movimento.
                  </p>
                </div>

                <Circle top={16} left={16} />
                <Circle top={16} rigth={16} />
                <Circle bottom={16} left={16} />
                <Circle bottom={16} rigth={16} />
              </div>
            </TextWithImg>
          </div>
        </Section2>

        <Section3>
          <div className="line3">
            <Image src={"/lineGroup3.svg"} width={1244} height={1179} alt="" />
          </div>

          <Menu>
            <Link href={"#"}>
              <Image
                src={"/nightLogo.svg"}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Solução</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={"/connection.svg"}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Relacionamento</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={"/tickets.svg"}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Diversão</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={"/conection.svg"}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Conexão</span>
            </Link>
          </Menu>

          <div className="title">
            <h2>Entre em contato</h2>
            <Circle top={16} left={16} />
            <Circle top={16} rigth={16} />
          </div>
          <FormComponent />
        </Section3>

        <Section4>
          <div className="line4">
            <Image src={"/lineGroup4.svg"} width={1244} height={1179} alt="" />
          </div>

          <div className="section-4-content">
            <TextWithImg2>
              <div className="title">
                <h2>Parceiros</h2>
                <Circle top={11} left={16} />
                <Circle top={11} rigth={16} />
              </div>
              <div className="content">
                <h3>Parceiros que Fazem a Night Existir</h3>

                <ImgContainer>
                  <img src="/parceiro1.svg" alt="" />
                  <img src="/parceiro2.svg" alt="" />
                  <img src="/parceiro3.svg" alt="" />
                  <img src="/parceiro4.svg" alt="" />
                </ImgContainer>

                <Circle top={16} left={16} />
                <Circle top={16} rigth={16} />
                <Circle bottom={16} left={16} />
                <Circle bottom={16} rigth={16} />
              </div>
            </TextWithImg2>

              
          </div>
        </Section4>
      </Main>
      <LpHeaderComponent />
    </Container>
  );
}
