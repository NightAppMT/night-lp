import { Container } from "./styles";
import lines1 from "@/../public/generalLP/line-group-1.svg";
import lines2 from "@/../public/generalLP/line-group-2.svg";
import lines3 from "@/../public/generalLP/line-group-3.svg";
import lines4 from "@/../public/generalLP/line-group-4.svg";
import Image from "next/image";

export default function Home() {
   return (
      <Container>
         <section className="section1">
            <div className="line1">
               <Image src={lines1} width={1244} height={1027} alt="" />
            </div>
         </section>

         <section className="section2">
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
         </section>

         {/* <div className="div1">1</div>
      <div className="div2">2</div>
      <div className="div3">3</div>
      <div className="div4">4</div>
      <div className="div5">5</div> */}
      </Container>
   );
}
