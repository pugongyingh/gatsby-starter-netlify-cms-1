import React from "react";
import { createGlobalStyle } from "styled-components";
import { main } from "../../styles/main";
import { theme, ThemeProvider } from "../../styles/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

const GlobalStyle = createGlobalStyle`
    ${main}
`;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <SiteMeta />
        <Navbar />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Page;
