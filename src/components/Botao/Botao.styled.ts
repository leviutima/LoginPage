import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
  }

export const BotaoStyle = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 410px;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;

    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.textColor};
    border: ${(props) => props.borderColor} 1px solid;
`

export const LinkStyle = styled(Link) `
  text-decoration: none;
`