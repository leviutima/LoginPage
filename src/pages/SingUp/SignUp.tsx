import React, { useState } from 'react';
import AsideForm from "../../components/Aside/Aside";
import Banner from "../../components/BannerMovelt/Banner";
import Botao from "../../components/Botao/Botao";
import Form from "../../components/Form/Form";
import or from '../../assets/or.png';
import { InputContainer } from "../Home/Home";
import { FormContainerSign, SignUpContainer, SubContainer } from "./SignUp.styled";
import { createUsuario } from '../../services/UsuarioService';

export interface Usuario {
    nome: string;
    email: string;
    senha: string;
    confirmacaoSenha: string;
}

const SignUp: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (senha !== confirmacaoSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        const usuario: Usuario = { nome, email, senha, confirmacaoSenha };

        try {
            await createUsuario(usuario);
            alert('Usuário criado com sucesso!');
            // Opcionalmente, redirecionar para a página de login ou limpar o formulário
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <>
            <SignUpContainer>
                <AsideForm>
                    <FormContainerSign onSubmit={handleSubmit}>
                        <InputContainer>
                            <span>Nome</span>
                            <Form
                                inputType="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <span>Endereço de Email</span>
                            <Form
                                inputType="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <span>Senha</span>
                            <SubContainer>
                                <Form
                                    inputType="password"
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <Form
                                    inputType="password"
                                    placeholder="Repita sua senha"
                                    value={confirmacaoSenha}
                                    onChange={(e) => setConfirmacaoSenha(e.target.value)}
                                />
                            </SubContainer>
                        </InputContainer>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Botao type="submit" bgColor="rgba(112, 1, 253, 1)" textColor="#fff">
                            Inscrever-se
                        </Botao>
                    </FormContainerSign>
                    <img src={or} alt="ou" />
                    <Botao borderColor="rgba(112, 1, 253, 1)" textColor="rgba(112, 1, 253, 1)" path="/">
                        Login agora
                    </Botao>
                </AsideForm>
                <Banner />
            </SignUpContainer>
        </>
    );
};

export default SignUp;