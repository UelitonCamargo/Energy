import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useNavigate } from 'react-router-dom'

import { EnvelopeSimple, Lightbulb, LockSimple } from "@phosphor-icons/react";

import {
    ImageBusinessPeople,
    ImageContainer,
    InputContainer,
    LoginButton,
    LoginContainer,
    NameCompanyContainer,
    RegisterAccount,
    OutputErrorMessage,
    BoxAllInputs,
}
    from "./styles";

import businessPeople from '../../assets/businessPeople.png'

const createUserFormSchema = z.object({
    email: z.string()
        .min(1, 'O e-mail e obrigatório')
        .email('Formato de e-mail inválido'),
    password: z.string()
        .min(6, 'A senha precisa de no mínimo 6 caracteres'),
})


type createUserFormData = z.infer<typeof createUserFormSchema>

export function Login() {
    const  navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function accessingAccount(data: any) {
        console.log(data)

        //jeito certo de enviar os dados para o Banco de Dados

        // const accessingAccount = async (data) => {
        //     try {
        //       console.log(data);
        //       await axios.post("http://localhost:5000/signup", data);
        //       navigate("/home", { replace: true }); // <-- redirect
        //     } catch (error) {
        //       console.error("There was an error!", error);
        //     }
        //   };

        navigate('/home', { replace: true })
    }

    return (
        <LoginContainer>
            <main>
                <ImageContainer>
                    <NameCompanyContainer>
                        <Lightbulb size={30} color="#FBA94C" />
                        <h1>Energy</h1>
                    </NameCompanyContainer>
                    <ImageBusinessPeople src={businessPeople} />
                </ImageContainer>
                <RegisterAccount>
                    <BoxAllInputs method='post' onSubmit={handleSubmit(accessingAccount)} >
                        <InputContainer>
                            <EnvelopeSimple size={24} />
                            <input
                                type="email"
                                placeholder="E-mail"
                                {...register('email')}
                            />
                        </InputContainer>
                        {errors.email && <OutputErrorMessage>{errors.email.message}</OutputErrorMessage>}
                        <InputContainer>
                            <LockSimple size={24} />
                            <input
                                type="password"
                                placeholder="Senha"
                                {...register('password')}
                            />
                        </InputContainer>
                        {errors.password && <OutputErrorMessage>{errors.password.message}</OutputErrorMessage>}
                        <a href="#">Esqueci minha senha</a>
                        <LoginButton type='submit' >ENTRAR</LoginButton>
                    </BoxAllInputs>
                </RegisterAccount>
            </main>
        </LoginContainer>
    )
}