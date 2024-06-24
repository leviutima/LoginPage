import React from "react";
import { BotaoStyle, LinkStyle } from "./Botao.styled";

interface ButtonProps {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    children: React.ReactNode;
    path?: string;
    type?: "button" | "submit" | "reset"; // ajuste para tipos de botão HTML
}

const Botao: React.FC<ButtonProps> = ({ bgColor, borderColor, textColor, children, path, type = "button" }) => {
    return (
        <>
            {path ? (
                <LinkStyle to={path}>
                    <BotaoStyle $bgColor={bgColor} $borderColor={borderColor} $textColor={textColor}>
                        <span>{children}</span>
                    </BotaoStyle>
                </LinkStyle>
            ) : (
                <BotaoStyle as="button" type={type} $bgColor={bgColor} $borderColor={borderColor} $textColor={textColor}>
                    <span>{children}</span>
                </BotaoStyle>
            )}
        </>
    );
};

export default Botao;
