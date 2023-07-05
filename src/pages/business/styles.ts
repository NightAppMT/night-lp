import { css, styled } from "styled-components";
import px2vw from "@/utils/size";

export const Container = styled.div``;

export const Main = styled.main`
   background-color: ${(props) => props.theme.color.secondary_80};
`;

export const ForCompanies = styled.section`
   h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.color.primary_80};
      margin: ${px2vw(80)} 0 ${px2vw(46)} ${px2vw(60)};
   }
   h2 {
      display: flex;
      justify-content: center;
   }
`;

export const ResponsiveIframe = styled.div`
   position: relative;
   width: 100%;
   height: 0;
   padding-top: 56.25%;
   margin: 0 auto ${px2vw(38)} auto;

   iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }

   @media (min-width: 768px) {
      width: ${px2vw(796)};
      padding-top: ${px2vw(403)};
      iframe {
         height: ${px2vw(402)};
      }
   }
`;

export const ContactForm = styled.section`
   background-color: ${(props) => props.theme.color.primary_80};
   color: black;
   padding: ${px2vw(36)} ${px2vw(36)} ${px2vw(25)} ${px2vw(96)};
   margin-top: ${px2vw(38)};
   h2 {
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 0.8;
      margin-bottom: ${px2vw(30)};
   }
`;

export const Form = styled.form`
   display: flex;
   gap: ${px2vw(45)};
`;

export const FormInput = styled.div`
   display: flex;
   flex-direction: column;
   font-weight: bold;
   label {
      font-size: 1.5rem;
   }
   input {
      font-weight: bold;
      font-size: ${px2vw(30)};
      background-color: black;
      color: ${(props) => props.theme.color.primary_80};
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
         -webkit-text-fill-color: ${(props) => props.theme.color.primary_80};
         -webkit-box-shadow: 0 0 0px 1000px #000 inset;
      }
   }

   #name {
      width: ${px2vw(330)};
   }
   #phoneNumber {
      width: ${px2vw(241)};
   }
   #email {
      width: ${px2vw(363)};
   }
`;

export const Description = styled.section`
   font-size: 1.875rem;
   font-weight: bold;
   color: white;
   padding: ${px2vw(60)} ${px2vw(80)} ${px2vw(80)} ${px2vw(30)};
   text-align: justify;
   p + p {
      margin-top: ${px2vw(40)};
   }
`
