import styled from "styled-components";

export const HomeContainer = styled.section `
    display: flex;
    align-items: center;
`

export const AsideLogin = styled.aside `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
    gap: 32px;



    background-color: #fff;
    width: 500px;
    height: 100vh;
`

export const ContainerTitle = styled.div `
    display: grid;
    gap: 42px;

    & span {
        font-weight: 700;
        font-size: 20px;
    }
`

export const FormContainer = styled.div `
    display: grid;
    gap: 22px;
`

export const InputContainer = styled.label `
    display: flex;
    flex-direction: column;

    color: var(--cinza-escuro);
`

export const InputStyle = styled.input `
    width: 410px;
    height: 50px;

    background-color: rgba(241, 243, 246, 1);
    border: none;
    border-radius: 5px;
`

export const BoxImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: 8px;
    background-color: var(--roxo);
`

export const SubContainer = styled.div `
    display: flex;
`

export const Title = styled.div `
    display: flex;
    align-items: center;
    gap: 13px;

    & h2 {
        font-weight: 400;
        font-size: 32px;
    }
`

export const ImgCenter = styled.div `
    margin-left: 22%;
`