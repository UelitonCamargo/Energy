import styled from 'styled-components'

export const FormContainer = styled.div`
    padding: 2rem 4rem;
`

export const AdministrativeDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Input = styled.input`
    background-color: ${props => props.theme['gray-700']};
    padding: 1rem 1rem;
    border-radius: 8px;
`

export const InputContainer = styled(Input)`
    
`

export const TextAreaContainer = styled.textarea`
    background-color: ${props => props.theme['gray-700']};
    padding: 1rem 1rem;
    border-radius: 8px;
`

export const WorkReportContainer = styled.div`
    margin-top: 2rem;

    border-style:solid;
    border-image-slice: 1;
    border-width: 2px;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-image-source: linear-gradient(to right, ${props => props.theme['gray-700']}, ${props => props.theme['gray-800']});

    h2 {
        text-align: center;
        margin: 2rem 0px;
    }
`

export const WorkReport = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`

export const IdentificationProjectProtocolContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ProtocolStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`