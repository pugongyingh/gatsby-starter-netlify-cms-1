import { withPrefix } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";

const MainGrid = styled(Grid)`
  padding: 0;
`;

const Layout = ({ children }: any) => {
  const { title, description } = useSiteMetadata();
  return (
    <MainGrid fluid={true}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Row>
        <Col>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Col>
      </Row>
    </MainGrid>
  );
};

export default Layout;
