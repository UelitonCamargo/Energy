import { Protocol } from "../../Components/Protocol";
import { ProtocolListHeader } from "../../Components/ProtocolListHeader";
import { ListOfProtcolsContainer, MainContainer, ScreenContainer } from "./styles";

export function Home() {
    return (
        <>
            <MainContainer>
                <ScreenContainer>
                   <ProtocolListHeader /> 
                   <ListOfProtcolsContainer>
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                        <Protocol />
                   </ListOfProtcolsContainer>
                </ScreenContainer>
            </MainContainer>
        </>
    )
}