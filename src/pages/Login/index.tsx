import { EnvelopeSimple, Lightbulb, LockSimple } from "@phosphor-icons/react";
import { BoxAllInputs, ImageBusinessPeople, ImageContainer, InputContainer, LoginButton, LoginContainer, NameCompanyContainer, RegisterAccount } from "./styles";

import businessPeople from '../../assets/businessPeople.png'


export function Login() {
    return (
        <LoginContainer>
            <main>
                <ImageContainer>
                    <NameCompanyContainer>
                        <Lightbulb size={30} color="#FBA94C"/>
                        <h1>Energy</h1>
                    </NameCompanyContainer>
                    <ImageBusinessPeople src={ businessPeople }/>
                </ImageContainer>
                <RegisterAccount>
                    <BoxAllInputs>
                        <InputContainer>
                            <EnvelopeSimple size={24}/>
                            <input type="email" name="" id="" placeholder="E-mail"/>
                        </InputContainer>
                        <InputContainer>
                            <LockSimple size={24}/>
                            <input type="password" name="" id="" placeholder="Senha"/>
                        </InputContainer>
                        <a href="#">Esqueci minha senha</a>
                    </BoxAllInputs>
                    <LoginButton href="/home">ENTRAR</LoginButton>
                </RegisterAccount>  
            </main>
        </LoginContainer>
    )
}