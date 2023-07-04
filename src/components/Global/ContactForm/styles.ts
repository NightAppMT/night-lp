import px2vw from "@/utils/size";
import { styled } from "styled-components";

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