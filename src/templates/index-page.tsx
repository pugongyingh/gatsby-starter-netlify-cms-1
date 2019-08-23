import { graphql } from "gatsby";
import React from "react";
import BlogRoll from "../components/BlogRoll";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import { File, Query } from "../graphql/types";
import { theme, ThemeProvider } from "../styles/theme";

interface IndexPageProps {
  hero: File;
  title: string;
  heading: string;
  subheading: string;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading
}) => (
    <div>
      <Header
        title={title}
        subheading={subheading}
        hero={hero}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                  </h3>
                    <BlogRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );

interface IndexPageTemplateProps {
  data: Query;
}

const IndexPage = ({ data }: IndexPageTemplateProps) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <IndexPageTemplate
          hero={frontmatter.hero}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
        />
      </Layout>
    </ThemeProvider>
  );
};

export const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ThemeProvider theme={theme}>
        <IndexPageTemplate
          hero={data.hero}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
        />
      </ThemeProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        hero {
          ...FileInfo
        }
        heading
        subheading
      }
    }
  }
`;

export default IndexPage;
