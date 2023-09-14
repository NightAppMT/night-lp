import Image from "next/image";
import { Header } from "./styles";
import Link from "next/link";

export default function LpHeaderComponent() {
  return (
    <Header>
      <Image
        src={"/NightAppLogo.png"}
        width={400}
        height={400}
        alt="Logo Executivo's Digital"
      />
      <nav>
        <Link href={"#"}>QUEM SOMOS</Link>
        <Link href={"#"}>PARCEIROS</Link>
        <Link href={"#"}>FALE CONOSCO</Link>
      </nav>
    </Header>
  );
}
