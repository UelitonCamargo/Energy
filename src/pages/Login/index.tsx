import { Lightning } from "@phosphor-icons/react";
import { ImageContainer, LoginContainer, RegisterAccount } from "./styles";

import businessPeople from '../../assets/businessPeople.png'

export function Login() {
    return (
        <LoginContainer>
            <main>
                <ImageContainer>
                    <div>
                        <Lightning size={24}/>
                        <h1>Energy</h1>
                    </div>

                    <img 
                        src={ businessPeople } 
                        alt="Imagem de Duas pessoas conversando sobre uma grande ideia" 
                    />
                </ImageContainer>
                <RegisterAccount>
                   
                </RegisterAccount>  
            </main>
        </LoginContainer>
    )
}