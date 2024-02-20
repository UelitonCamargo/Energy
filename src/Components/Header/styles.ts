import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    height: 8.75rem;
    background-color: ${props => props.theme['gray-800']};

    position: fixed;
    top: 0;
    left: 0;

    border-style:solid;
    border-image-slice: 1;
    border-width: 2px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-image-source: linear-gradient(to right, ${props => props.theme['green-500']}, ${props => props.theme['gray-900']});

    @media(max-width: 480px) {
        height: 5.75rem;
    }
`

export const ScreenContainer = styled.div`
    max-width: 87.25rem;
    padding: 0 0.93rem;
    margin: 0 auto;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
        color: ${props => props.theme.white};
        font-size: 1.4rem;
        font-weight: bold;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const PerfilContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme.white};
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 1.6;

    strong, span {
        color: ${props => props.theme.white};
    }

    svg {
        color: ${props => props.theme.white};
    }

    @media(max-width: 480px) {
        display: none;
    }
`

export const PerfilImage = styled.img`
    width: calc(3.5rem + 12px);
    height: calc(3.5rem + 12px);
    border-radius: 50%;
    border: 4px solid ${props => props.theme['gray-800']};
    outline: 2px solid ${props => props.theme['green-500']};

    @media(max-width: 480px) {
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
    }
`