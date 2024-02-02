import { AdministrativeDataContainer, CheckboxContainer, DataCollectionContainer, FormContainer, IdentificationProjectProtocolContainer, InputContainer, ProtocolStatus, TextAreaContainer, WorkReport, WorkReportContainer } from "./styles";

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

            <DataCollectionContainer>
                <h2>Dados de Levantamento</h2>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Cliente acompanhou levantamento</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">vizinho apontou local por telefone</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Cliente não atende telefone</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Tirado foto de levantamento</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Paralisação da obra</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Local não encontrado</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Telefone não atende ou inexistente</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Coletando pontos de GPS</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Necessita autorização de passagem</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Necessita autorização de corte/poda de árvores</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Necessita detalhes de travessia - torres de transmissão</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Necessita ocupação de faixa - DER/DNIT</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Necessita laudo do IAP</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Cliente vai alterar pedido da obra</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Características de loteamento rural</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Cliente acompanhou levantamento</label>
                </CheckboxContainer>
            </DataCollectionContainer>
        </FormContainer>
    )
}