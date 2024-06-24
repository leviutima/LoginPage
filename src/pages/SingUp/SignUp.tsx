import AsideForm from "../../components/Aside/Aside"
import Banner from "../../components/BannerMovelt/Banner"
import Botao from "../../components/Botao/Botao"
import Form from "../../components/Form/Form"
import or from '../../assets/or.png'
import { InputContainer } from "../Home/Home"
import { SignUpContainer, SubContainer } from "./SignUp.styled"

const SingUp = () => {
    return(
        <>
        <SignUpContainer>
            <AsideForm>
                <InputContainer>
                    <span>Name</span>
                    <Form inputType="text"></Form>
                </InputContainer>
                <InputContainer>
                <span>Email Address</span>
                    <Form inputType="email"></Form>
                </InputContainer>
                <InputContainer>
                    <span>Password</span>
                    <SubContainer>
                       <Form inputType="password" placeholder="Enteryour password"></Form>
                        <Form inputType="password" placeholder="Repeat you password"></Form> 
                    </SubContainer>
                </InputContainer>
                <Botao bgColor="rgba(112, 1, 253, 1)" textColor="#fff">Sign Up</Botao>
                <img src={or}></img>
                <Botao borderColor="rgba(112, 1, 253, 1)" textColor="rgba(112, 1, 253, 1)" path="/">Login now</Botao>
            </AsideForm>
            <Banner/>
        </SignUpContainer> 
        </>
    )
}

export default SingUp