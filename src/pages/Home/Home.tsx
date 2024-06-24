import {HomeContainer, InputContainer } from './Home'
import Botao from '../../components/Botao/Botao'
import or from '../../assets/or.png'
import Banner from '../../components/BannerMovelt/Banner'
import Form from '../../components/Form/Form'
import AsideForm from '../../components/Aside/Aside'

const Home = () => {
    return(
        <>
            <HomeContainer>
                <AsideForm>
                    <InputContainer>
                        <span>Email Address</span>
                        <Form inputType='email'></Form>  
                    </InputContainer>
                    <InputContainer>
                        <span>Password</span>
                        <Form inputType='password'></Form>
                    </InputContainer>
                    <Botao bgColor='rgba(112, 1, 253, 1)' textColor='#fff'>Login now</Botao>
                    <img src={or}></img>
                    <Botao borderColor='rgba(112, 1, 253, 1)' textColor='rgba(112, 1, 253, 1)' path='/Sign-Up'>Signup now</Botao>
                </AsideForm>
                <Banner/>
            </HomeContainer>
        </>
    )
}

export default Home