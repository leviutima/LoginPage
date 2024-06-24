import { InputStyle } from "./Form.styled"

interface InputProps { 
    inputType: string
}

const Form = ({inputType}: InputProps) => {
    return(
        <>
            <InputStyle type={inputType}></InputStyle>
        </>
    )
}

export default Form