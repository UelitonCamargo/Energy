import { ArrowsDownUp } from "@phosphor-icons/react";
import { ButtonCreateProtocol, CreateProtocolContainer, OrderProtocols, ProtocolHeaderContainer, ShowQuantityOfProtocolsContainer } from "./styles";

export function ProtocolListHeader() {
    return (
        <ProtocolHeaderContainer>
            <ShowQuantityOfProtocolsContainer>
                <h1>Protocolos Criados</h1>
                <p>Quantidade de protocolos pendentes: <span>02</span></p>
            </ShowQuantityOfProtocolsContainer>

            <CreateProtocolContainer>
                <ButtonCreateProtocol href="#">
                    Criar Protocolo
                </ButtonCreateProtocol>
                <OrderProtocols>
                    <ArrowsDownUp />
                    <ul>
                        <li><a href="#">Data</a></li>
                        <li><a href="#">Prioridade</a></li>
                        <li><a href="#">Abertas</a></li>
                    </ul>
                </OrderProtocols>
            </CreateProtocolContainer>
        </ProtocolHeaderContainer>
    )
}