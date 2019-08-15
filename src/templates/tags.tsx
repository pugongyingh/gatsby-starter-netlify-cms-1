import { graphql, Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Query, SitePageContext } from "../@types/graphql";
import Layout from "../components/Layout";

export interface TagRouteInterface {
  data: Query,
  pageContext: SitePageContext
}

class TagRoute extends React.Component<TagRouteInterface> {
  public render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post: any) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
      } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  private get title() {
    if (this.props.data.site && this.props.data.site.siteMetadata) {
      return this.props.data.site.siteMetadata.title;
    }
    return '';
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
