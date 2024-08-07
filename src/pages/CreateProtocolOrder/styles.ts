import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const MainContainer = styled.main`

`

export const ScreenContainer = styled.section`
    width: 100%;
    max-width: 87.25rem;
    min-height: 100vh;
    padding: 0 0.93rem;
    margin: 0 auto;

    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 400px;
    gap: 2rem;

    margin-top: 10.75rem;
    margin-bottom: 2rem;

    @media(max-width: 1280px) {
        display: flex;
        flex-direction: column-reverse;
    }

    @media(max-width: 480px) {
        margin-top: 8.25rem;
    }
`

export const FormContainer = styled.form`
    background-color: ${props => props.theme['gray-800']};
    border-radius: 8px;

    @media(max-width: 1280px) {
        width: 100%;
    }
`

export const CalendarContainer = styled.aside`
    background-color: ${props => props.theme['gray-800']};
    border-radius: 8px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h4 {
        margin-top: 1rem;
        color: ${props => props.theme.white};
        font-weight: 400;
    }

    .react-calendar {
        border-radius: 8px;

        @media(max-width: 480px) {
            width: initial;
            line-height: initial;
        }
    }

    @media(max-width: 1280px) {
        width: 100%;
    }
`

export const ButtonContainer = styled(Link)`
    background-color: ${props => props.theme['green-500']};
    width: 80%;
    text-align: center;
    padding: 0.8rem 0px;
    border-radius: 8px;
    font-weight: bold;
    color: ${props => props.theme.white};
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme['green-700']};
    }

    @media(max-width: 1280px) {
        width: 50%;
    }
`

export const ButtonSubmit = styled.a`
    background-color: ${props => props.theme['green-500']};
    width: 80%;
    text-align: center;
    padding: 0.8rem 0px;
    border-radius: 8px;
    font-weight: bold;
    color: ${props => props.theme.white};
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
        background-color: ${props => props.theme['green-700']};
    }

    @media(max-width: 1280px) {
        width: 50%;
    }
`
