import Image from "next/image";
import { Header } from "./styles";
import Link from "next/link";

export default function LpHeaderComponent() {
  return (
    <Header>
      <Image
        src={"/execLogo.svg"}
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
  );
}
