import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        transition : linear 0.25s;
        background : ${props=>props.theme.backgroundColor};
        color : ${props=>props.theme.mainColor};
        font-family: 'Nunito Sans', sans-serif;
    }

    button {
        font-family: 'Nunito Sans', sans-serif;
        padding: 10px 15px;  
        border: 0.1px solid;
        border-color: ${props=>props.theme.mainColor};
        background : ${props=>props.theme.backgroundColor};
        color : ${props=>props.theme.mainColor};
        transition: linear 0.25s;
    }
    button:hover {
        background : ${props=>props.theme.mainColor};
        color: ${props=>props.theme.backgroundColor};
    } 

    }
    h1 {
        font-size: 1rem; 
        letter-spacing : 0.2rem;
        font-weight: bold;
    }
    h2 {
        font-siez: 1.4rem;
    }
`;

export default GlobalStyle;