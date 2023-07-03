import { CircleContainer } from "./styles";

interface CircleProps {
   top?: number;
   rigth?: number;
   bottom?: number;
   left?: number;
}

export default function Circle({ top, rigth, bottom, left }: CircleProps) {
   return (
   <CircleContainer 
      top={top}
      rigth={rigth}
      bottom={bottom}
      left={left}
   />
   );
}
