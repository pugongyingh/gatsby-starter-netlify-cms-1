import detectBrowserLanguage from 'detect-browser-language';
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { MarkdownRemarkEdge, Maybe, Query } from "../../graphql/types";
import { main } from "../../styles/main";
import { injectGlobal, theme, ThemeProvider } from "../../styles/theme";
import SiteMeta from "./SiteMeta";

// tslint:disable-next-line
injectGlobal`
  ${main}
`;

interface PageProps {
  locale: Maybe<string>;
  configs?: MarkdownRemarkEdge[];
}

const PageTemplate: React.SFC<PageProps> = ({ children, locale, configs }) => {
  const localizedMeta = configs!.find((config) => config.node.frontmatter!.locale === locale)
  if (!localizedMeta) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SiteMeta title={localizedMeta!.node.frontmatter!.title!} />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};


const Page: React.SFC<PageProps> = props => {
  const locale = detectBrowserLanguage();
  if (navigator !== undefined && locale !== props.locale && process.env.GATSBY_ENV !== 'development') {
    document.cookie = `nf_lang=${locale}`;
    location.replace(location.host + `/${locale}`)
  }
  return (
    <StaticQuery
      query={graphql`
        query PageQuery {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/static/config//"}}) {
            edges {
              node {
                frontmatter {
                  locale
                  title
                }
              }
            }
          }
        }
      `}
      render={(data: Query) => <PageTemplate configs={data.allMarkdownRemark.edges} {...props} />}
    />
  );
};

export default Page;
