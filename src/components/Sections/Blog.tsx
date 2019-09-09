import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import blogImgOne from "../../img/blog-1.png";
import styled from "../../styles/theme";
import StyledBlogItem from "../BlogItem";
import Carousel from "../Carousel";

interface BlogProps {
  className?: string;
}

class Blog extends React.Component<BlogProps> {
  public render() {
    return (
      <section id="blog" className={this.props.className}>
        <Grid className="container">
          <h1>Blog</h1>
          <Row className="blog-wrap">
            <Col className="blog-item">
              <Carousel>
                <StyledBlogItem
                  src={blogImgOne}
                  alt="A Blog Placeholder"
                  sub="Skysail gun swing the lead pink Cat o'nine"
                  blogText="                    Rigging Plate Fleet quarterdeck scallywag jolly boat
                    Buccaneer Brethren of the Coast ahoy keelhaul six pounders.
                    Walk the plank matey Letter of Marque brig aft bring a
                    spring upon her cable grog blossom hang the jib Barbary
                    Coast yard. Barkadeer doubloon measured fer yer chains
                    splice."
                />
                <StyledBlogItem
                  src={blogImgOne}
                  alt="A Blog Placeholder"
                  sub="Skysail gun swing the lead pink Cat o'nine"
                  blogText="                    Rigging Plate Fleet quarterdeck scallywag jolly boat
                    Buccaneer Brethren of the Coast ahoy keelhaul six pounders.
                    Walk the plank matey Letter of Marque brig aft bring a
                    spring upon her cable grog blossom hang the jib Barbary
                    Coast yard. Barkadeer doubloon measured fer yer chains
                    splice."
                />
                <StyledBlogItem
                  src={blogImgOne}
                  alt="A Blog Placeholder"
                  sub="Skysail gun swing the lead pink Cat o'nine"
                  blogText="Rigging Plate Fleet quarterdeck scallywag jolly boat
                    Buccaneer Brethren of the Coast ahoy keelhaul six pounders.
                    Walk the plank matey Letter of Marque brig aft bring a
                    spring upon her cable grog blossom hang the jib Barbary
                    Coast yard. Barkadeer doubloon measured fer yer chains
                    splice."
                />
                <StyledBlogItem
                  src={blogImgOne}
                  alt="A Blog Placeholder"
                  sub="Skysail gun swing the lead pink Cat o'nine"
                  blogText="Rigging Plate Fleet quarterdeck scallywag jolly boat
                    Buccaneer Brethren of the Coast ahoy keelhaul six pounders.
                    Walk the plank matey Letter of Marque brig aft bring a
                    spring upon her cable grog blossom hang the jib Barbary
                    Coast yard. Barkadeer doubloon measured fer yer chains
                    splice."
                />
                <StyledBlogItem
                  src={blogImgOne}
                  alt="A Blog Placeholder"
                  sub="Skysail gun swing the lead pink Cat o'nine"
                  blogText="Rigging Plate Fleet quarterdeck scallywag jolly boat
                    Buccaneer Brethren of the Coast ahoy keelhaul six pounders.
                    Walk the plank matey Letter of Marque brig aft bring a
                    spring upon her cable grog blossom hang the jib Barbary
                    Coast yard. Barkadeer doubloon measured fer yer chains
                    splice."
                />
              </Carousel>
            </Col>
          </Row>
          {/*<Row className="arrow-icons-wrap">

          </Row>*/}
        </Grid>
        {/* <BlogRoll /> */}
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

  .arrow-icons-wrap {
    justify-content: flex-end;
  }

  .slick-slide {
    :nth-of-type(3n + 3) {
      margin-right: 0 !important;
    }
  }
`;

export default StyledBlog;
