import { Container, Form, Header, ResponsiveIframe } from "./styles";
import execLogo from "@/../public/generalLP/exec-logo.svg";
import lines1 from "@/../public/generalLP/line-group-1.svg";
import lines2 from "@/../public/generalLP/line-group-2.svg";
import lines3 from "@/../public/generalLP/line-group-3.svg";
import lines4 from "@/../public/generalLP/line-group-4.svg";
import Image from "next/image";
import Link from "next/link";

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

         <section className="section1">
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
               ></iframe>
            </ResponsiveIframe>
            <Form>
               <div className="circle circle1" />
               <div className="circle circle2" />
               <div className="circle circle3" />
               <div className="circle circle4" />

               <div className="label-and-input">
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="name" id="name" />
               </div>

               <div className="label-and-input">
                  <label htmlFor="phoneNumber">Telefone</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" />
               </div>

               <div className="label-and-input">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
               </div>

               <div className="button-container">
                  <button type="submit">Enviar</button>
               </div>
            </Form>
         </section>

         {/* <section className="section2">
            <div className="line2">
               <Image src={lines2} width={746} height={707} alt="" />
            </div>
         </section>

         <section className="section3">
            <div className="line3">
               <Image  src={lines3} width={1244} height={500} alt=""/>
            </div>
         </section>

         <section className="section4">
            <div className="line4">
               <Image  src={lines4} width={1244} height={700} alt=""/>
            </div>
         </section> */}
      </Container>
   );
}
