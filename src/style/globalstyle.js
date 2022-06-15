import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
        outline: 0;
    }
    
    :root{
        --lightpink: #FF577F;
        --pink: #FF427F;
        --darkpink: #59323F;
        --gray4: #121214;
        --gray3: #212529; 
        --gray2: #343B41;
        --gray1: #868E96;
        --gray0: #F8F9FA;
        --green: #3FE864;
        --red: #E83F5B;
        --black: #000000;
    }
    
    body{
        background-color: var(--gray4);
        height: 100vh;
    }

    a{
        text-decoration: none;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }
`