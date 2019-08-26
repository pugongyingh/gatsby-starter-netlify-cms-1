import { Link } from "gatsby";
import React from "react";
import useBlogPosts from "../graphql/queries/useBlogPosts";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

const BlogRoll = () => {
  const posts = useBlogPosts();

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

export default BlogRoll;