import { BannerContainer, ImgCenter } from "./Banner.styed"
import moveltSkt from '../../assets/Delivery.svg'


const Banner = () => {
    return(
        <>
            <BannerContainer>
                <ImgCenter>
                    <img src={moveltSkt}/>
                </ImgCenter>
            </BannerContainer>
        </>
    )
}

export default Banner