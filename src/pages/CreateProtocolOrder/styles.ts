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
`

export const FormContainer = styled.form`
    background-color: ${props => props.theme['gray-800']};
    border-radius: 8px;
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
    }
`

export const ButtonContainer = styled.a`
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
`
