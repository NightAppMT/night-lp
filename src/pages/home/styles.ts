import { styled } from "styled-components";
import px2vw2 from "@/utils/px2vw2";
import px2vw from "@/utils/px2vw";

interface ContainerProps {
   type: boolean;
}

export const Container = styled.div`
   overflow: hidden;
   height: 150vh;

   .section1 {
      padding-bottom: ${px2vw2(55)};
      /* background-color: black; */
   }

   .line1 {
      overflow: hidden;
      width: 100%;
      background-color: ${(props) => props.theme.color.primary_80};
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw2(1244)};
         height: auto;
      }
   }
`;

export const Header = styled.header`
   background-color: ${(props) => props.theme.color.secondary_60};
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: ${px2vw2(16)} ${px2vw2(110)} ${px2vw2(10)};
   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

   img {
      width: ${px2vw2(83)};
      height: auto;
   }

   nav {
      display: flex;
      align-items: center;
      gap: ${px2vw2(70)};
      a {
         font-size: 1.1rem;
         font-weight: bold;
         text-decoration: none;
         color: white;

         &:last-child {
            background-color: ${(props) => props.theme.color.primary_100};
            color: #292336;
            padding: ${px2vw2(14)} ${px2vw2(11)};
         }
      }
   }
`;

export const VideoSection = styled.section`

`

export const ResponsiveIframe = styled.div`
   position: relative;
   top: ${px2vw2(117)};
   height: 0;
   padding-top: 47.3%;
   margin: 0 auto ${px2vw2(116)} auto;

   iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.3);
   }

   @media (min-width: 768px) {
      width: ${px2vw(880)};
      margin: 0 auto;
      /* padding-top: ${px2vw2(578)};  */
      iframe {
         height: ${px2vw(560)};
      }
   }
`;

export const Form = styled.form`
   position: relative;
   display: flex;
   justify-content: space-between;
   gap: ${px2vw2(64)};
   margin: ${px2vw2(200)} ${px2vw2(180)} 0;
   padding: ${px2vw2(46)} ${px2vw2(38)} ${px2vw2(70)};
   background-color: ${(props) => props.theme.color.secondary_60};

   .label-and-input {
      display: flex;
      flex-direction: column;

      label {
         font-size: 1.1rem;
         color: white;
      }
      input {
         font-size: 1.3rem;
         width: ${px2vw2(154)};
         border: 0;
         box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
         &:focus {
            outline: 0;
         }
      }
   }

   @media(max-width: 768px) {
      margin: ${px2vw2(200)} ${px2vw2(150)} 0;
   }

   .button-container {
      align-self: flex-end;
      button {
         font-size: 1.5rem;
         font-weight: bold;
         color: white;
         background-color: ${props => props.theme.color.blue_100};
         padding: ${px2vw2(16)} ${px2vw2(40)};
         border: 0;
         box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.6);
      }
   }

   .circle {
      position: absolute;
      background-color: white;
      width: ${px2vw2(12)};
      height: ${px2vw2(12)};
      border-radius: 50%;
   }
   .circle1 {
      top: ${px2vw2(13)};
      left: ${px2vw2(13)};
   }
   .circle2 {
      top: ${px2vw2(13)};
      right: ${px2vw2(13)};
   }
   .circle3 {
      bottom: ${px2vw2(13)};
      left: ${px2vw2(13)};
   }
   .circle4 {
      bottom: ${px2vw2(13)};
      right: ${px2vw2(13)};
   }
`;

/* .section2 {
      padding-bottom: ${px2vw(860)};
   }

   .line2 {
      overflow: hidden;
      width: 100%;
      background-color: ${(props) => props.theme.color.blue_100};
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw(935)};
         height: auto;
         margin-left: ${px2vw(290)};
      }
   }

   .section3 {
      padding-bottom: ${px2vw(611)};
   }

   .line3 {
      overflow: hidden;
      width: 100%;
      background-color: ${(props) => props.theme.color.primary_80};
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw(1520)};
         height: auto;
      }
   }

   .line4 {
      overflow: hidden;
      width: 100%;
      background-color: white;
      position: absolute;
      z-index: -1;
      img {
         width: ${px2vw(1520)};
         height: auto;
      }
   } */
