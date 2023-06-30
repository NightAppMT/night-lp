import { styled } from "styled-components";
import px2vw2 from "@/utils/px2vw2";
import px2vw from "@/utils/px2vw";

interface ContainerProps {
   type: boolean;
}

export const Container = styled.div`
   overflow: hidden;
   .section1 {
      padding-bottom: ${px2vw(1060)};
   }

   .line1 {
      overflow: hidden;
      width: 100%;
      background-color: ${(props) => props.theme.color.primary_100};
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw(1520)};
         height: auto;
      }
   }
   .line2 {
      overflow: hidden;
      width: 100%;
      background-color: ${props => props.theme.color.blue_100};
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw(940)};
         height: auto;
         margin-left: ${px2vw(395)};
      }

      /* z-index: -1;
      margin-left: 0;
      img {
         margin-left: ${px2vw2(238.5)};
         width: ${px2vw2(745)};
         height: auto;
      } */
   }
`;
