import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { theme, ThemeProvider } from "../../styles/theme";
import { GlobalStyle } from "../CMS/Preview";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

const MainGrid = styled(Grid)`
  padding: 0;
`;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainGrid fluid={true}>
        <GlobalStyle />
        <SiteMeta />
        <Row>
          <Col>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </Col>
        </Row>
      </MainGrid>
    </ThemeProvider>
  );
}

export default Page;