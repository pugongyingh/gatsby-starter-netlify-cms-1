import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { theme, ThemeProvider } from "../../styles/theme";
import { GlobalStyle } from "../CMS/Preview";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

const StyledPage = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid fluid={true}>
        <GlobalStyle />
        <SiteMeta />
        <Row>
          <Col>
            <Navbar />
            <StyledPage>
              {children}
            </StyledPage>
            <Footer />
          </Col>
        </Row>
      </Grid>
    </ThemeProvider>
  );
}

export default Page;