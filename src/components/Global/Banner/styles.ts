import { styled } from "styled-components";
import px2vw from "@/utils/size";

export const BannerWrapper = styled.div`
   display: flex;
   justify-content: center;
   padding: 14vh ${px2vw(32)} 0;

   img {
      width: 100%;
      height: auto;
      margin-top: 0.2rem;
   }
   `