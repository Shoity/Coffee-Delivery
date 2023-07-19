import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
  
    body{
        background-color: ${props => props.theme['base-background']};
        color:${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body,input,text-area, button {
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    ::focus{
        outline: 0;
    }
` 