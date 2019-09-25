import { withPrefix } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";

interface SiteMetaProps {
  title: string;
}

const SiteMeta: React.SFC<SiteMetaProps> = ({ title }) => {
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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />

      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/og-image.jpg`}
      />

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
  );
};

export default SiteMeta;
