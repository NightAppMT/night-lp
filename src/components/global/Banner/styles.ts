import { styled } from "@stitches/react";
import Image from "next/image";

export const BannerContainer = styled('div', {
   display: 'flex',
   justifyContent: 'center',
})

export const Banner = styled(Image, {
   maxWidth: '90rem',
   width: '100%',
   height: 'auto',
   margin: '0.2rem 2rem 2rem',
})