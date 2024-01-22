import styled from 'styled-components'

export const ProtocolContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 6.25rem;
    background-color: ${props => props.theme['gray-800']};
    border-radius: 8px;
    padding: 1rem 0.5rem;
`
export const InfoProtocolContainer = styled.div`
`
export const AgentAndConsumerContainer = styled.div`
`

export const StatusProtocolContainer = styled.div`
`

export const PagePDFContainer = styled.div`


    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`