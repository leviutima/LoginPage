import styled from "styled-components"

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