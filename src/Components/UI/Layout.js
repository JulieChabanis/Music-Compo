import styled, { ThemeProvider } from "styled-components"; 
import { useState } from "react";

import GlobalStyle from "./GlobalStyle";

import lightTheme from "./Themes/light.json";
import darkTheme from "./Themes/dark.json";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
    const [isLight, setIsLight] = useState(true)

    function HandleToggleTheme(){
        setIsLight(!isLight)
    }

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                <Header isLight={isLight} HandleToggleTheme={HandleToggleTheme}/>
                <Main>{children}</Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;

const Main = styled.div`
    min-height: calc(100vh - 192px); 
    width: 96%; 
    max-width: 1240px;
    margin: auto; 
    margin-top: 32px; 
`;