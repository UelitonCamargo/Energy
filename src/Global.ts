import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        border: none;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width: 768px) {
            font-size: 87.5%; //14px
        }

        @media(max-width: 480px) {
            font-size: 81.3%; //13px
        }
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1, h2, h3, h4, h5, h6, button {
        font-family: 'Sora', sans-serif;
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    body {
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    } 

    body, input, textarea {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    } 
`