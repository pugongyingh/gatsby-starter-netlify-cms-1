import * as React from 'react';
import { main } from "../../styles/main";
import { createGlobalStyle, theme, ThemeProvider } from "../../styles/theme";

const GlobalStyle = createGlobalStyle`
    ${main}
`;

export const Preview: React.SFC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    );
}