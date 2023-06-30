import { Container } from "./styles";
import line from '../../../../../../../Downloads/Lines.png'
import Image from "next/image";

export default function Home() {
  return (
   <Container>
      <section className="section1">
         <div className="line1">
            <Image src={line} width={1244} height={1027} alt="" />
         </div>
      </section>

      <section className="section2">
      <h1>TEstaaae</h1>
      </section>
      

      {/* <div className="div1">1</div>
      <div className="div2">2</div>
      <div className="div3">3</div>
      <div className="div4">4</div>
      <div className="div5">5</div> */}
   </Container>
  );
}
