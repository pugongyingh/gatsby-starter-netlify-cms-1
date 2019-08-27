import React from "react";
import { theme, ThemeProvider } from "../../styles/theme";
import { GlobalStyle } from "../CMS/Preview";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

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
