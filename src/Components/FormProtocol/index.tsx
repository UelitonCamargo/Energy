import { AdministrativeDataContainer, FormContainer, IdentificationProjectProtocolContainer, InputContainer, ProtocolStatus, TextAreaContainer, WorkReport, WorkReportContainer } from "./styles";

export function FormProtocol() {
    return (
        <FormContainer>
            <AdministrativeDataContainer>
                <InputContainer placeholder="Projetista Celesc" type="text" />
                <InputContainer placeholder="AES" type="number" />
                <InputContainer placeholder="UC Referência" type="number" />
                <InputContainer placeholder="Nome Consumidor" type="text" />
                <InputContainer placeholder="E-mail" type="E-mail" />
                <InputContainer placeholder="Telefone" type="number" />
                <InputContainer placeholder="Cidade" type="text" />
                <InputContainer placeholder="Latitude" type="number" />
                <InputContainer placeholder="Longitude" type="number" />
                <TextAreaContainer cols={3} rows={3} placeholder="Descrição" />
                
                <InputContainer placeholder="Orçamento" type="number" />
                
            </AdministrativeDataContainer>

            <WorkReportContainer>
                <h2>Boletim Diário de Obra</h2>
                <WorkReport>
                    <IdentificationProjectProtocolContainer>
                        <InputContainer placeholder="Protocolo" type="number" />
                        <InputContainer placeholder="Protocolo Celesc" type="number" />
                        <InputContainer placeholder="Número de projeto" type="number" />
                        <InputContainer placeholder="Escopo de obra" type="text" />
                    </IdentificationProjectProtocolContainer>
                    <ProtocolStatus>
                        <InputContainer placeholder="Data" type="date" />
                        <InputContainer placeholder="Local" type="text" />
                        <InputContainer placeholder="Status" type="text" />
                        <InputContainer placeholder="Levantamento" type="text" />
                    </ProtocolStatus>
                </WorkReport>
            </WorkReportContainer>
        </FormContainer>
    )
}