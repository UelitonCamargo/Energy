import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { EnvelopeSimple, Lightbulb, LockSimple } from "@phosphor-icons/react";
import {
    BoxAllInputs,
    ImageBusinessPeople,
    ImageContainer,
    InputContainer,
    LoginButton,
    LoginContainer,
    NameCompanyContainer,
    RegisterAccount,
    OutputErrorMessage,
}
    from "./styles";

import businessPeople from '../../assets/businessPeople.png'

const createUserFormSchema = z.object({
    email: z.string()
        .min(1, 'O e-mail e obrigatorio')
        .email('Formato de e-mail invalido'),
    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),
})


type createUserFormData = z.infer<typeof createUserFormSchema>

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function accessingAccount(data: any) {
        console.log(data)
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
                    <BoxAllInputs onSubmit={handleSubmit(accessingAccount)}>
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