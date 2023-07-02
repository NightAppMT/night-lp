import px2vw2 from "@/utils/px2vw2";
import { styled } from "styled-components";

export const Form = styled.form`
   position: relative;
   display: flex;
   justify-content: space-between;
   gap: ${px2vw2(64)};
   margin: ${px2vw2(200)} ${px2vw2(180)} 0;
   padding: ${px2vw2(46)} ${px2vw2(38)} ${px2vw2(70)};
   background-color: ${(props) => props.theme.color.secondary_60};
   box-shadow: 7px 7px 2px rgba(0, 0, 0, 0.4);

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
         &:hover {
            scale: 1.05;
         }
         &:active {
            scale: 0.95;
         }
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