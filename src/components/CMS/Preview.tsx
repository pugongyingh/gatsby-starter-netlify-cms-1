import * as React from 'react';
import { theme, ThemeProvider } from "../../styles/theme";

export const Preview: React.SFC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
    );
}