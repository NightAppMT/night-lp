import banner from '../../../../public/banner.png'
import { Banner, BannerContainer } from './styles'

export default function ExecutivosBanner() {
   return (
      <BannerContainer>
         <Banner
            src={banner}
            width={1440}
            height={500}
            alt=""
         />
      </BannerContainer>
   )
}