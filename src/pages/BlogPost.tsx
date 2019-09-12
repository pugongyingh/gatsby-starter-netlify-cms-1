import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { HTMLContent } from "../components/CMS/Content";
import { Preview } from "../components/CMS/Preview";
import Page from "../components/Layout/Page";
import { Query } from "../graphql/types";
import { StyledBlogPostTemplate } from "../templates/BlogPostTemplate";

interface BlogPostTemplateProps {
    data: Query,
}

const BlogPost = ({ data }: BlogPostTemplateProps) => {
    const { markdownRemark: post } = data;

    if (!post || !post.frontmatter) {
        throw new Error("Data loading error");
    }

    return (
        <Page>
            <StyledBlogPostTemplate
                content={post.html || ""}
                contentComponent={HTMLContent}
                description={post.frontmatter.description || ""}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title!}
                locale={post.frontmatter.locale!}
            />
        </Page>
    );
};

export const BlogPostPreview = ({ entry, widgetFor }: any) => (
    <Preview>
        <StyledBlogPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            title={entry.getIn(['data', 'title'])}
            locale={entry.getIn(['data', 'locale'])}
        />
    </Preview>
)
// FIXME: id is required
export const pageQuery = graphql`
  query BlogPostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        locale
      }
    }
  }
`;

export default BlogPost;