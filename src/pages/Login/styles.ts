import styled from 'styled-components'

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    main {
        width: 100%;
        max-width: 58.5rem;
        height: 31.25rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media(max-width: 991px) {
        main {
           height: auto;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 1rem;
        }
    }

    @media(max-width: 480px) {
        align-items:normal
    }
`

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

    @media(max-width: 991px) {
        align-items: center;
    }
`

export const NameCompanyContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const ImageBusinessPeople = styled.img`
    width: 25.87rem;
    height: 25.87rem;

    @media(max-width: 991px) {
        width: 22.87rem;
        height: 22.87rem;
    }
`

export const RegisterAccount = styled.div`
    width: 30rem;
    border-radius: 8px;
    padding: 4rem;
    background-color: ${props => props.theme['gray-800']};
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    button {
        font-size: 1rem;
        height: 3.12rem;
        border-radius: 8px;
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
    }

    @media(max-width: 480px) {
        width: 100%;
        max-width: 30rem;
        padding: 2rem;
    }
`

export const BoxAllInputs = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
`

export const InputContainer = styled.div`
    max-width: 22rem;
    height: 3.12rem;
    border-radius: 8px;
    padding: 0.625rem;
    background-color: ${props => props.theme['gray-600']};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
        width: 85%;
        background-color: transparent;

        &:focus {
            box-shadow: none;
        }
    }

    @media(max-width: 480px) {
        max-width: none;
    }
`



