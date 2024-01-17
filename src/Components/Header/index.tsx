import { Bell, CaretDown, Lightbulb } from "@phosphor-icons/react";
import { HeaderContainer, LogoContainer, PerfilContainer, PerfilImage, ScreenContainer, WelcomeContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <ScreenContainer>
                <LogoContainer>
                    <Lightbulb  color="#FBA94C"/>
                    <p>Energy</p>
                </LogoContainer>

                <PerfilContainer>
                    <WelcomeContainer>
                        <strong>Bem vindo</strong>
                        <span>Uéliton Pereira Camargo</span>
                        <CaretDown />
                    </WelcomeContainer>
                    <PerfilImage src="https://github.com/Uelitonn6.png"/>
                    <Bell />
                </PerfilContainer>
            </ScreenContainer>
        </HeaderContainer>
    )
}