import { Check, Clock, FilePdf } from "@phosphor-icons/react";
import { AgentAndConsumerContainer, InfoProtocolContainer, PagePDFContainer, ProtocolContainer, StatusProtocolContainer } from "./styles";

export function Protocol() {
    return  (
        <ProtocolContainer>
           <InfoProtocolContainer>
                <p>Protocolo: <span>0001</span></p>
                <p>N do Projeto: <span>1111</span></p>
                <p>UC de Referência: REF001</p>
            </InfoProtocolContainer> 
           <AgentAndConsumerContainer>
                <p>Agente: <span>Uéliton Camargo</span></p>
                <p>Consumidor: <span>Fulano de tal</span></p>
           </AgentAndConsumerContainer>
           <StatusProtocolContainer>
                <p>
                    Fechado:
                    <Check />
                </p>
                <p>
                    urgente:
                    <Clock />
                </p>
                <p>
                    Levantamento:
                    <Check />
                </p>
           </StatusProtocolContainer>
           <PagePDFContainer>
                <FilePdf />
           </PagePDFContainer>
        </ProtocolContainer>
    )
}