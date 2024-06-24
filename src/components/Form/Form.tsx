import { InputStyle } from "./Form.styled"

interface InputProps { 
    inputType: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({inputType, placeholder, value, onChange}: InputProps) => {
    return(
        <>
            <InputStyle type={inputType} placeholder={placeholder} value={value} onChange={onChange}></InputStyle>
        </>
    )
}

export default Form