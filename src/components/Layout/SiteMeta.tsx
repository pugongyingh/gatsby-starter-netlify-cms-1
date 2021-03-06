import { withPrefix } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import logo from "../../img/starkys-logo-proper.svg";

interface SiteMetaProps {
  title: string;
  description: string;
}

const SiteMeta: React.SFC<SiteMetaProps> = ({ title, description }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      {/* <link
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
      /> */}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Muli:400,700|Open+Sans:400,700,800&display=swap"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
      />

      {/* FAVICONS STARTS HERE */}
      {/* <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-16x16.png" sizes="16x16"/>
      <link rel="mask-icon" href="%PUBLIC_URL%/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="theme-color" content="#ffffff"/> */}

      <meta property="description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://starkysclub.com" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={logo}
      />
    </Helmet>
  );
};

export default SiteMeta;
