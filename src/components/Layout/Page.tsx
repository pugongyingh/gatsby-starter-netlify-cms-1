import React from "react";
import { main } from "../../styles/main";
import { injectGlobal, theme, ThemeProvider } from "../../styles/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

// FIXME: Issue with global styles
// injectGlobal`
//   ${main}
// `;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SiteMeta />
        <Navbar />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Page;
