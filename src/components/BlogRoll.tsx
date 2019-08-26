import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";
import { Query } from "../graphql/types";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

const BlogRollTemplate = (data: Query) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }: any) => (
          <div className="is-parent column is-6" key={post.id}>
            <article
              className="blog-list-item tile is-child box notification"
            >
              <header>
                {post.frontmatter.image ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.image,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                    </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
}

const BlogRoll = () => {
  return <StaticQuery
    query={graphql`
      query BlogRollQuery {
          allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
          edges {
              node {
              excerpt(pruneLength: 400)
              id
              fields {
                  slug
              }
              frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  image {
                  childImageSharp {
                      fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                      }
                  }
                  }
              }
              }
          }
          }
      }
    `}
    render={BlogRollTemplate} />
}

export default BlogRoll;