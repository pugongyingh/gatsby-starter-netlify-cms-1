import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { theme, ThemeProvider } from "../../styles/theme";
import { GlobalStyle } from "../CMS/Preview";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SiteMeta from "./SiteMeta";

const StyledGrid = styled(Grid)`
  padding: 0 !important;
`;

const StyledContentWrap = styled.div`
  color: blue;
`;

const Page: React.SFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGrid fluid={true}>
        <GlobalStyle />
        <SiteMeta />
        <Row>
          <Col xs={12}>
            <Navbar />
            <StyledContentWrap>{children}</StyledContentWrap>
            <Footer />
          </Col>
        </Row>
      </StyledGrid>
    </ThemeProvider>
  );
};

export default Page;
