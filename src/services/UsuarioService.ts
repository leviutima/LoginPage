// usuarioService.ts
import { Usuario } from '../pages/SingUp/SignUp';

const API_URL = 'http://localhost:8080/usuarios';

export const createUsuario = async (usuario: Usuario): Promise<void> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar usuário. Por favor, tente novamente mais tarde.');
        }
    } catch (error) {
        throw new Error('Erro ao conectar-se ao servidor. Por favor, verifique sua conexão de internet e tente novamente.');
    }
};
