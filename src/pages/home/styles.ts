import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
   .section1 {
      padding-bottom: 82.5%;
   }
   
   .line1 {
      background-color: ${props => props.theme.color.primary_100};
      z-index: -1;
      position: absolute;
      img {
         width: 100%;
         height: auto;
      }
   }
   .line2 {
      margin-left: 30%;
      img {
         width: 60%;
         height: auto;
      }
   }
`

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

