import React from "react";
import { main } from "../../styles/main";
import { injectGlobal, theme, ThemeProvider } from "../../styles/theme";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

// tslint:disable-next-line
injectGlobal`
  ${main}
`;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SiteMeta />
        <Navbar />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Page;
