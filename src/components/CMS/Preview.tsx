import * as React from 'react';
import { main } from "../../styles/main";
import { injectGlobal, theme, ThemeProvider } from "../../styles/theme";

// tslint:disable-next-line
injectGlobal`${main}`;

export const Preview: React.SFC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
    );
}