import styled from 'styled-components'

export const FormContainer = styled.div`
    padding: 2rem 4rem;

    @media(max-width: 480px) {
        padding: 2rem 2rem;
    }
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
    color: ${props => props.theme['gray-400']};
`

export const TextAreaContainer = styled.textarea`
    resize: none;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.theme['gray-700']};
    padding: 1rem 1rem;
    border-radius: 8px;
    color: ${props => props.theme['gray-400']};
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

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
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

export const DataCollectionContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    border-style:solid;
    border-image-slice: 1;
    border-width: 2px;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-image-source: linear-gradient(to right, ${props => props.theme['gray-700']}, ${props => props.theme['gray-800']});

    h2 {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 1.2rem;
    }
`

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    input[type = 'checkbox'] {
        cursor: pointer;
        appearance: none;
        width: 2rem;
        height: 2rem;
        outline: none;
        border-radius: 8px;
        border: 2px solid ${props => props.theme['gray-600']};
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 4px;
            width: 7px;
            left: 0.5rem;
            height: 13px;
            border-right: 3px solid ${props => props.theme['green-500']};
            border-bottom: 3px solid  ${props => props.theme['green-500']};
            opacity: 0;
            transform: rotate(25deg);
            transition: all 600ms;
        }

        &:checked::before {
            opacity: 1;
        }
    }

    @media(max-width: 480px) {
        flex-direction: column;
        text-align: center;
        gap: 0.3rem;
        padding: 1rem;

        border: 1px solid ${props => props.theme['gray-600']};
        border-radius: 8px;
    }

`

export const OccurrenceOfTheWorkContainer = styled.div`
    margin-top: 2rem;

    border-style:solid;
    border-image-slice: 1;
    border-width: 2px;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-image-source: linear-gradient(to right, ${props => props.theme['gray-700']}, ${props => props.theme['gray-800']});

    h2 {
        margin: 2rem 0rem;
        text-align: center;
    }
`