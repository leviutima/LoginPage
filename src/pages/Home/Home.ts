import styled from "styled-components";

export const HomeContainer = styled.section `
    display: flex;
    align-items: center;
`

export const AsideLogin = styled.aside `
    display: flex;
    flex-direction: column;
    align-items: center;



    background-color: #fff;
    width: 480px;
    height: 100vh;
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