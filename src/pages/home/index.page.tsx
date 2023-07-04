import {
  Container,
  Header,
  Main,
  Menu,
  ResponsiveIframe,
  Section2,
  Section3,
  Section4,
  TextWithImg,
  TextWithImg2,
  VideoSection,
} from "./styles";
import execLogo from "@/../public/generalLP/exec-logo.svg";
import lines1 from "@/../public/generalLP/line-group-1.svg";
import lines2 from "@/../public/generalLP/line-group-2.svg";
import lines3 from "@/../public/generalLP/line-group-3.svg";
import lines4 from "@/../public/generalLP/line-group-4.svg";
import LandingPageForm from "@/components/Page/home/Form";
import Image from "next/image";
import Link from "next/link";

import MenuIcon from "@/../public/generalLP/menu-button.svg";
import Circle from "@/components/Page/home/Circle";
import FormComponent from "@/components/Page/home/Form";

export default function Home() {
  return (
    <Container>
      <Header>
        <Image
          src={execLogo}
          width={84}
          height={84}
          alt="Logo Executivo's Digital"
        />
        <nav>
          <Link href={"#"}>QUEM SOMOS</Link>
          <Link href={"#"}>EXECUTADOS</Link>
          <Link href={"#"}>FALE CONOSCO</Link>
        </nav>
      </Header>

      <Main>
        <VideoSection>
          <div className="line1">
            <Image src={lines1} width={1244} height={1027} alt="" />
          </div>
          <ResponsiveIframe>
            <iframe
              width="680"
              height="380"
              src="https://www.youtube.com/embed/oPOKpSFqy-I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </ResponsiveIframe>
          <div className="form-container">
            <FormComponent />
          </div>
        </VideoSection>
        <Section2>
          <div className="line2">
            <Image src={lines2} width={1244} height={1179} alt="" />
          </div>
          <div className="section-2-content">
            <Image
              src={
                "https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-desfiladeiro-canion-montanhas-rocha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={1260}
              height={750}
              alt=""
              className="sectionImg"
            />
            <TextWithImg>
              <div className="title">
                <h2>TEXTO</h2>
                <Circle top={11} left={16} />
                <Circle top={11} rigth={16} />
              </div>
              <div className="content">
                <h3>TEXTO</h3>
                <Image
                  src={
                    "https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-desfiladeiro-canion-montanhas-rocha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  width={1260}
                  height={750}
                  alt=""
                />
                <div className="text">
                  <strong>O Lorem Ipsum é um texto modelo</strong>
                  <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão.
                  </p>
                  <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão.
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
            <Image src={lines3} width={1244} height={1179} alt="" />
          </div>

          <Menu>
            <Link href={"#"}>
              <Image
                src={MenuIcon}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Texto</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={MenuIcon}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Texto</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={MenuIcon}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Texto</span>
            </Link>
            <Link href={"#"}>
              <Image
                src={MenuIcon}
                width={55}
                height={55}
                alt="Ícone do Menu"
              />
              <span>Texto</span>
            </Link>
          </Menu>

          <div className="title">
            <h2>Texto</h2>
            <Circle top={16} left={16} />
            <Circle top={16} rigth={16} />
          </div>
          <FormComponent />
        </Section3>

        <Section4>
          <div className="line4">
            <Image src={lines4} width={1244} height={1179} alt="" />
          </div>

          <div className="section-4-content">
            <TextWithImg2>
              <div className="title">
                <h2>TEXTO</h2>
                <Circle top={11} left={16} />
                <Circle top={11} rigth={16} />
              </div>
              <div className="content">
                <h3>TEXTO</h3>
                <div className="text">
                  <strong>O Lorem Ipsum é um texto modelo</strong>
                  <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão.
                  </p>
                  <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão.
                  </p>
                </div>

                <Image
                  src={
                    "https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-desfiladeiro-canion-montanhas-rocha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  width={1260}
                  height={750}
                  alt=""
                />
                <Circle top={16} left={16} />
                <Circle top={16} rigth={16} />
                <Circle bottom={16} left={16} />
                <Circle bottom={16} rigth={16} />
              </div>
            </TextWithImg2>

            <Image
              src={
                "https://images.pexels.com/photos/16069883/pexels-photo-16069883/free-photo-of-desfiladeiro-canion-montanhas-rocha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={1260}
              height={750}
              alt=""
              className="sectionImg"
            />
          </div>
        </Section4>
      </Main>
      <Header>
        <Image
          src={execLogo}
          width={84}
          height={84}
          alt="Logo Executivo's Digital"
        />
        <nav>
          <Link href={"#"}>QUEM SOMOS</Link>
          <Link href={"#"}>EXECUTADOS</Link>
          <Link href={"#"}>FALE CONOSCO</Link>
        </nav>
      </Header>
    </Container>
  );
}
