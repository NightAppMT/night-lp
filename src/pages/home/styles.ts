import { styled } from "styled-components";
import px2vw2 from "@/utils/px2vw2";
import px2vw from "@/utils/px2vw";

interface ContainerProps {
   type: boolean;
}

export const Container = styled.div`
   overflow: hidden;
   h1 {
      background-color: red;
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
   padding-bottom: ${px2vw2(44)};
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
   @media (min-width: 768px) {
      padding-bottom: ${px2vw2(56)};
   }
`;

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

export const Section2 = styled.section`
   padding-bottom: ${px2vw2(93)};
   .line2 {
      overflow: hidden;
      width: 100%;
      background-color: ${(props) => props.theme.color.blue_100};
      position: absolute;
      z-index: -1;
      img {
         max-width: ${px2vw2(750)};
         margin-left: ${px2vw2(250)};
         height: auto;
      }
   }
   @media (min-width: 768px) {
      padding-bottom: ${px2vw2(141.3)};
   }

   .section-2-content {
      padding: ${px2vw2(111)} ${px2vw2(111)} 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
   }

   .sectionImg {
      width: ${px2vw2(333)};
      height: ${px2vw2(444)};
      object-fit: cover;
      box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);
   }
`;

export const TextWithImg = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${px2vw2(43)};
   align-items: flex-end;


   .title {
      position: relative;
      background-color: ${(props) => props.theme.color.primary_100};
      width: ${px2vw2(360)};
      box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);
      h2 {
         font-size: 2.5rem;
         font-weight: bold;
         text-align: center;
         padding: ${px2vw2(14)} 0 ${px2vw2(17)} 0;
      }
      .circle {
         position: absolute;
         width: ${px2vw2(11)};
         height: ${px2vw2(11)};
         border-radius: 50%;
         background-color: white;
      }

      .circle1 {
         top: ${px2vw2(11)};
         left: ${px2vw2(16)};
      }
      .circle2 {
         top: ${px2vw2(11)};
         right: ${px2vw2(16)};
      }
   }

   .content {
      position: relative;
      width: ${px2vw2(577)};
      display: grid;
      grid-template-areas:
         "image title"
         "image text";
      
      color: white;
      background-color: ${(props) => props.theme.color.secondary_60};
      box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);

      h3 {
         grid-area: title;
         margin: ${px2vw2(32)} 0 ${px2vw2(21)} ${px2vw2(20)};
         font-size: 2rem;
      }
      img {
         grid-area: image;
         width: ${px2vw2(111)};
         height: ${px2vw2(138)};
         align-self: center;
         margin: 0 ${px2vw2(40)} 0 ${px2vw2(55)};
      }
      .text {
         text-align: end;
         margin-right: ${px2vw2(50)};
         strong {
            margin-top: ${px2vw2(21)};
         }
         p {
            font-weight: normal;
            margin-top: ${px2vw2(24)};
            &:last-child {
               margin-bottom: ${px2vw2(43)};
            }
         }
      }
   }
`;

export const Section3 = styled.section`
   .line3 {
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
   @media (min-width: 768px) {
      padding-bottom: ${px2vw2(56)};
   }
`

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
