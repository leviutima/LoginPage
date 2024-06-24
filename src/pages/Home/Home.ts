import styled from "styled-components";

export const HomeContainer = styled.section `
    display: flex;
    align-items: center;
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

export const Title = styled.div `
    display: flex;
    align-items: center;
    gap: 13px;

    & h2 {
        font-weight: 400;
        font-size: 32px;
    }
`