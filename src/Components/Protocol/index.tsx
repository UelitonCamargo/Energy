import { Check, Clock, FilePdf } from "@phosphor-icons/react";
import { AgentAndConsumerContainer, InfoProtocolContainer, PagePDFContainer, ProtocolContainer, SpanContainer, StatusProtocolContainer } from "./styles";

export function Protocol() {
    return  (
        <ProtocolContainer>
           <InfoProtocolContainer>
                <p>Protocolo: <SpanContainer>0001</SpanContainer></p>
                <p>N do Projeto: <SpanContainer>1111</SpanContainer></p>
                <p>UC de Referência: <SpanContainer>REF001</SpanContainer></p>
            </InfoProtocolContainer> 
           <AgentAndConsumerContainer>
                <p>Agente: <SpanContainer>Uéliton Camargo</SpanContainer></p>
                <p>Consumidor: <SpanContainer>Fulano de tal</SpanContainer></p>
           </AgentAndConsumerContainer>
           <StatusProtocolContainer>
                <p>
                    Fechado:
                    <Check color="#00875f"/>
                </p>
                <p>
                    urgente:
                    <Clock color="#FBA94C"/>
                </p>
                <p>
                    Levantamento:
                    <Check color="#00875f"/>
                </p>
           </StatusProtocolContainer>
           <PagePDFContainer>
                <FilePdf />
           </PagePDFContainer>
        </ProtocolContainer>
    )
}