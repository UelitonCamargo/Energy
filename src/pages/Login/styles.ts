import styled from 'styled-components'

export const LoginContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    main {
        width: 100%;
        max-width: 58.5rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media(max-width: 991px) {
        main {
           padding: 2.5rem;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 1rem;
        }
    }

    @media(max-width: 480px) {
        main {
            align-items:normal;
            gap: 2.5rem;
        }
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
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

    @media(max-width: 480px) {
        width: 14.87rem;
        height: 14.87rem;
    }
`

export const RegisterAccount = styled.div`
    width: 30rem;
    border-radius: 8px;
    padding: 4rem;
    background-color: ${props => props.theme['gray-800']};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    @media(max-width: 480px) {
        width: 100%;
        max-width: 30rem;
        padding: 2rem;
    }
`

export const BoxAllInputs = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            color: ${props => props.theme['green-700']};
            transition: color .2s;

            &:hover {
                color: ${props => props.theme['green-500']};
            }
        }
`

export const LoginButton = styled.a`
        width: 100%;
        font-size: 1rem;
        text-align: center;
        line-height: 3.4;
        border-radius: 8px;
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
        transition: background-color .2s;

        &:hover {
            background-color: ${props => props.theme['green-700']};
        }
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



