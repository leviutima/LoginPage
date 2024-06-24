import React from "react"
import { BotaoStyle, LinkStyle } from "./Botao.styled"


interface ButtonProps {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    children: React.ReactNode;
    path?: string;
}

const Botao: React.FC<ButtonProps> = ({bgColor, borderColor, textColor,children, path}: ButtonProps) => {
    return( 
        <>
            {path ? (
                <LinkStyle to={path}>
                    <BotaoStyle bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
                        <span>{children}</span>
                    </BotaoStyle>
                </LinkStyle>
            ) : (
                <BotaoStyle bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
                    <span>{children}</span>
                </BotaoStyle>
            )}
        </>
    )
}

export default Botao