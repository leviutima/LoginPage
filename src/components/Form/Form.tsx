import { InputStyle } from "./Form.styled"

interface InputProps { 
    inputType: string;
    placeholder?: string;
}

const Form = ({inputType, placeholder}: InputProps) => {
    return(
        <>
            <InputStyle type={inputType} placeholder={placeholder}></InputStyle>
        </>
    )
}

export default Form