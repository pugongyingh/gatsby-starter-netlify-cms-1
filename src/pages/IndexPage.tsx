import { graphql, PageRendererProps } from "gatsby";
import * as React from "react";
import { Preview } from "../components/CMS/Preview";
import Page from "../components/Layout/Page";
import { Query } from "../graphql/types";
import { StyledIndexPageTemplate } from "../templates/IndexPageTemplate";

interface IndexPageTemplateProps extends PageRendererProps {
  data: Query;
}

const IndexPage = ({ data }: IndexPageTemplateProps) => {
  const { markdownRemark: page } = data;

  if (!page || !page.frontmatter) {
    throw new Error("Data loading error");
  }

  return (
    <Page>
      <StyledIndexPageTemplate
        hero={page.frontmatter.hero!}
        title={page.frontmatter.title!}
        subheading={page.frontmatter.subheading}
        clients={page.frontmatter.clients}
      />
    </Page>
  );
};

export const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <Preview>
        <StyledIndexPageTemplate
          hero={data.hero}
          title={data.title}
          subheading={data.subheading}
          clients={data.clients}
        />
      </Preview>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export const pageQuery = graphql`
  query IndexPageTemplate ($locale: String) {
    markdownRemark(frontmatter: {locale: {eq: $locale}, templateKey: {eq: "IndexPage"}}) {
      frontmatter {
        title
        subheading
        hero {
          ...FileInfo
        }
        clients {
          ...ClientInfo
        }
      }
    }
  }
`;

export default IndexPage;
