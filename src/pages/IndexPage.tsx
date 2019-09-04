import { graphql } from "gatsby";
import { Preview } from "../components/CMS/Preview";
import Page from "../components/Layout/Page";
import { Query } from "../graphql/types";
import { StyledIndexPageTemplate } from "../templates/IndexPageTemplate";

interface IndexPageTemplateProps {
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
                />
            </Preview>
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
          subheading
          hero {
            ...FileInfo
          }
        }
      }
    }
  `;

export default IndexPage;
