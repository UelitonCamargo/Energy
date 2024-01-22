import { Header } from "../../Components/Header";
import { ProtocolListHeader } from "../../Components/ProtocolListHeader";
import { MainContainer, ScreenContainer } from "./styles";

export function Home() {
    return (
        <>
            <Header />
            <MainContainer>
                <ScreenContainer>
                   <ProtocolListHeader /> 
                </ScreenContainer>
            </MainContainer>
        </>
    )
}