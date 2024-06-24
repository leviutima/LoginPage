import React from "react"
import { BotaoStyle } from "./Botao.styled"

interface ButtonProps {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    children: React.ReactNode
}

const Botao: React.FC<ButtonProps> = ({bgColor, borderColor, textColor,children, }: ButtonProps) => {
    return( 
        <>
            <BotaoStyle bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
                <span>{children}</span>
            </BotaoStyle>
        </>
    )
}

export default Botao