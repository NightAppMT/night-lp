import px2vw from "@/utils/size";
import { styled } from "styled-components";

interface CircleProps {
   top?: number;
   rigth?: number;
   bottom?: number;
   left?: number;
}

export const CircleContainer = styled.div<CircleProps>`
   position: absolute;
   width: ${px2vw(11, 1244)};
   height: ${px2vw(11, 1244)};
   background-color: white;
   border-radius: 50%;

   top: ${(props) => (props.top ? `${px2vw(props.top)}` : "auto")};
   right: ${(props) => (props.rigth ? `${px2vw(props.rigth)}` : "auto")};
   bottom: ${(props) => (props.bottom ? `${px2vw(props.bottom)}` : "auto")};
   left: ${(props) => (props.left ? `${px2vw(props.left)}` : "auto")};
`;
