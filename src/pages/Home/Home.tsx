import moveltSkt from '../../assets/Delivery.svg'
import moveltLogo from '../../assets/logo.svg'
import { AsideLogin, HomeContainer, ImgCenter, Title } from './Home'

const Home = () => {
    return(
        <>
            <HomeContainer>
                <AsideLogin>
                    <div>
                        <Title>
                            <img src={moveltLogo}/>
                            <h2>movelt!</h2>
                        </Title>
                        <span>Login into your account</span>
                    </div>
                </AsideLogin>
                <ImgCenter>
                    <img src={moveltSkt}/>
                </ImgCenter>
            </HomeContainer>
        </>
    )
}

export default Home