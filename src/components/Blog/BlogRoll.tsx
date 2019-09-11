import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { MarkdownRemark, Query } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import StyledCarousel from "../Carousel/Carousel";
import StyledBlogItem from "./BlogItem";

interface P extends SCP {
  blogPosts: MarkdownRemark[];
}

class Blog extends React.Component<P> {
  public render() {
    return (
      <section className={this.props.className}>
        <Grid className="container">
          <h1>Blog</h1>
          <Row className="blog-wrap">
            <Col className="blog-item">
              <StyledCarousel>
                {this.props.blogPosts && this.props.blogPosts.map((post: MarkdownRemark) => {
                  return (
                    <StyledBlogItem
                      key={post.id}
                      image={post.frontmatter!.image!}
                      title={post.frontmatter!.title!}
                      description={post.frontmatter!.description!}
                    />
                  )
                })}
              </StyledCarousel>
            </Col>
          </Row>
        </Grid>
      </section>
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

  .blog-item {
    width: 100%;
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
`;


const BlogRollQuery: React.SFC<Omit<P, "blogPosts">> = props => {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
          ) {
            edges {
              node {
                  ...BlogInfo
              }
            }
          }
        }
      `}
      render={(blogPosts: Query) => <StyledBlog blogPosts={blogPosts.allMarkdownRemark.edges.map((edge) => edge.node)} {...props} />}
    />
  );
};

export default BlogRollQuery;
