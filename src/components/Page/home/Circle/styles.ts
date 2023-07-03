import px2vw2 from "@/utils/px2vw2";
import { styled } from "styled-components";

interface CircleProps {
   top?: number;
   rigth?: number;
   bottom?: number;
   left?: number;
}

export const CircleContainer = styled.div<CircleProps>`
   position: absolute;
   width: ${px2vw2(11)};
   height: ${px2vw2(11)};
   background-color: white;
   border-radius: 50%;

   top: ${(props) => (props.top ? `${px2vw2(props.top)}` : "auto")};
   right: ${(props) => (props.rigth ? `${px2vw2(props.rigth)}` : "auto")};
   bottom: ${(props) => (props.bottom ? `${px2vw2(props.bottom)}` : "auto")};
   left: ${(props) => (props.left ? `${px2vw2(props.left)}` : "auto")};
`;
