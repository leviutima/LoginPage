import { Title } from "../../pages/Home/Home"
import { AsideLogin, ContainerTitle } from "./Aside.styled"
import moveltLogo from '../../assets/logo.svg'
import React from "react"

interface PropAside {
    children: React.ReactNode;
}

const AsideForm = ({children}: PropAside) => {
    return(
        <>
            <AsideLogin>
                <ContainerTitle>
                    <Title>
                        <img src={moveltLogo}/>
                        <h2>movelt!</h2>
                    </Title>
                    <span>Login into your account</span>
                </ContainerTitle> 
                {children}
            </AsideLogin>
        </>
    )
}

export default AsideForm