import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Query } from "../@types/graphql";
import Content, { ContentFormatter, HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

interface BlogPostProps {
  content: string;
  contentComponent?: (props: ContentFormatter) => React.ReactElement;
  description: string;
  title: string;
  helmet?: React.ReactElement
}

export const BlogPostTemplate: React.SFC<BlogPostProps> = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface BolgPostTemplateProps {
  data: Query,
}

const BlogPost = ({ data }: BolgPostTemplateProps) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export const BlogPostPreview = ({ entry, widgetFor }: any) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;

export default BlogPost;