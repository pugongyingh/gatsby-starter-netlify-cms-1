import * as React from "react";
import { main } from "../../styles/main";
import { css, theme, ThemeProvider } from "../../styles/theme";

interface P { }

export const Preview: React.SFC<P> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli:400,700|Open+Sans:400,700,800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
        <style>{css`
          ${main}
        `}</style>
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};
