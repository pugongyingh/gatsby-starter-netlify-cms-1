import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { MarkdownRemark, Maybe, Query } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import StyledCarousel from "../Carousel/Carousel";
import StyledBlogItem from "./BlogItem";

interface P extends SCP {
  blogPosts: MarkdownRemark[];
  locale: Maybe<string>;
}

class Blog extends React.Component<P> {
  public render() {
    const blogPosts =
      this.props.blogPosts &&
      this.props.blogPosts.filter(
        post => post.frontmatter!.locale === this.props.locale
      );
    if (!blogPosts.length) {
      return null;
    }
    return (
      <div className={this.props.className}>
        <Grid>
          <h1>Blog</h1>
          <Row className="blog-wrap">
            <Col className="blog-item">
              <StyledCarousel>
                {blogPosts.map((post: MarkdownRemark) => {
                  return (
                    <StyledBlogItem
                      className="block-item"
                      key={post.id}
                      image={post.frontmatter!.image!}
                      title={post.frontmatter!.title!}
                      description={post.frontmatter!.description!}
                      slug={post.fields!.slug!}
                    />
                  );
                })}
              </StyledCarousel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const StyledBlog = styled(Blog)`
  background-color: ${props => props.theme.colors.blogSectionBg};
  color: ${props => props.theme.colors.white};
  padding: 2rem 0;

  @media ${props => props.theme.screen.laptop} {
    padding: 7.5rem 0;
  }

  .row {
    @media ${props => props.theme.screen.laptop} {
      margin-top: 95px;
    }
  }
  .slick-slider {
    margin-right: -4rem;
  }
  .blog-item {
    width: 100%;
    overflow: hidden;
    z-index: 10;
  }

  .blog-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${props => props.theme.screen.laptop} {
      margin-top: 100px;

      h2 {
        margin-top: 70px;
      }
    }
  }
  @media ${props => props.theme.screen.mobileL} {
    .slick-slider {
      margin-right: 0;
    }
  }
`;

const BlogRollQuery: React.SFC<Omit<P, "blogPosts">> = props => {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            edges {
              node {
                ...BlogInfo
              }
            }
          }
        }
      `}
      render={(blogPosts: Query) => (
        <StyledBlog
          blogPosts={blogPosts.allMarkdownRemark.edges.map(edge => edge.node)}
          {...props}
        />
      )}
    />
  );
};

export default BlogRollQuery;
