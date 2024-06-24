import React from "react"
import { BotaoStyle } from "./Botao.styled"
import { Link } from "react-router-dom";

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
                <Link to={path}>
                    <BotaoStyle bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
                        <span>{children}</span>
                    </BotaoStyle>
                </Link>
            ) : (
                <BotaoStyle bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
                    <span>{children}</span>
                </BotaoStyle>
            )}
        </>
    )
}

export default Botao