import moveltSkt from '../../assets/Delivery.svg'
import moveltLogo from '../../assets/logo.svg'
import email from '../../assets/email.png'
import senha from '../../assets/senha.png'
import { AsideLogin, BoxImg, ContainerTitle, FormContainer, HomeContainer, ImgCenter, InputContainer, InputStyle, SubContainer, Title } from './Home'
import Botao from '../../components/Botao/Botao'
import or from '../../assets/or.png'

const Home = () => {
    return(
        <>
            <HomeContainer>
                <AsideLogin>
                    <ContainerTitle>
                        <Title>
                            <img src={moveltLogo}/>
                            <h2>movelt!</h2>
                        </Title>
                        <span>Login into your account</span>
                    </ContainerTitle>
                    <FormContainer>
                        <div>
                            <InputContainer>
                                <span>Email Address</span>
                                <SubContainer>
                                    <InputStyle type='email' ></InputStyle>
                                    <BoxImg>
                                        <img src={email}></img>
                                    </BoxImg>
                                </SubContainer>
                            </InputContainer>  
                        </div>
                        <div>
                            <InputContainer>
                                <span>Password</span>
                                <SubContainer>
                                    <InputStyle type='password'></InputStyle>
                                    <BoxImg>
                                        <img src={senha}></img>
                                    </BoxImg>
                                </SubContainer>
                            </InputContainer>
                        </div>
                    </FormContainer>
                    <Botao bgColor='rgba(112, 1, 253, 1)' textColor='#fff'>Login now</Botao>
                    <img src={or}></img>
                    <Botao borderColor='rgba(112, 1, 253, 1)' textColor='rgba(112, 1, 253, 1)'>Signup now</Botao>
                </AsideLogin>
                <ImgCenter>
                    <img src={moveltSkt}/>
                </ImgCenter>
            </HomeContainer>
        </>
    )
}

export default Home