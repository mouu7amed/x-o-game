import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
}

:root{
    --main-color: #78BEC5;
}

body {
    
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fff;
}

`;
