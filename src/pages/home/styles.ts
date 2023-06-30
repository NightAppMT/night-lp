import { styled } from "styled-components";
import px2vw2 from "@/utils/px2vw2";

interface ContainerProps {
   type: boolean;
}

export const Container = styled.div`
   overflow: hidden;
   .section1 {
      padding-bottom: ${px2vw2(1016.5)};
   }

   .lines {
      width: 100vw;
      height: auto;
      position: absolute;
   }

   .line1 {
      position: relative;
      background-color: ${(props) => props.theme.color.primary_100};
      position: absolute;
      z-index: -1;
      img {
         width: 100%;
         height: auto;
      }
   }
   .line2 {
      position: relative;;
      z-index: -1;
      img {
         width: 100%;
         margin-top: 70%;
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

// export const Container = styled.div`
//    display: flex;
//    .div1, .div2, .div3, .div4, .div5 {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 200px;
//       height: 200px;
//    }
//    .div1 {
//       position: absolute;
//       top: 0;
//       right: 0;
//       z-index: -1;
//       background-color: red;
//    }
//    .div2 {
//       background-color: green;
//    }
//    .div3 {
//       background-color: blue;
//    }
//    .div4 {
//       background-color: yellow;
//    }
//    .div5 {
//       background-color: purple;
//    }
// `;
