import styled from 'styled-components'

export const ProtocolContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 6.25rem;
    background-color: ${props => props.theme['gray-800']};
    border-radius: 8px;
    padding: 1rem 0.5rem;

    p {
        font-weight: bold;
        line-height: 1.6;
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.7rem;

        p {
            text-align: center;
        }
    }
        
    @media(max-width: 480px) {
        grid-template-columns: 1fr;
    }
`
export const InfoProtocolContainer = styled.div`
`
export const AgentAndConsumerContainer = styled.div`
`

export const StatusProtocolContainer = styled.div`
    p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`

export const PagePDFContainer = styled.div`


    svg {
        width: 2.7rem;
        height: 2.7rem;
        padding: 0.2rem;
        color: #ff0000;
        background-color: ${props => props.theme['gray-400']};
        border-radius: 8px;
    }

    @media(max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SpanContainer = styled.span`
    font-weight: 400;
    color: ${props => props.theme['green-500']};
`