import styled from 'styled-components'

export const ProtocolHeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

export const ShowQuantityOfProtocolsContainer = styled.div`
    line-height: 1.8;

    p {
        span {
            color: ${props => props.theme['green-500']};
        }
    }
`

export const CreateProtocolContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const ButtonCreateProtocol = styled.a`
    font-weight: bold;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme['green-500']};
    border-radius: 8px;
    padding: 1rem 4rem;
    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme['green-700']};
    }
`

export const OrderProtocols = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ul {
        display: flex;
        gap: 0.5rem;
        
        li, a {
            color: ${props => props.theme.white};
            transition: filter .2s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`