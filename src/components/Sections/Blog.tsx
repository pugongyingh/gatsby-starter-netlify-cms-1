import React from "react";
import Slider from "react-slick";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import blogImgOne from "../../img/blog-1.png";
import styled from "../../styles/theme";
import ArrowButton from "../ArrowButton";
import StyledBlogItem from "../BlogItem";

interface BlogProps {
  className?: string;
}

class Blog extends React.Component<BlogProps> {
  private reference: React.RefObject<Slider> = React.createRef();
  public next = () => {
    this.reference.current!.slickNext();
  };
  public previous = () => {
    this.reference.current!.slickPrev();
  };
  public render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section className={this.props.className}>
        <Grid className="container">
          <h1>Blog</h1>
          <Row className="blog-wrap">
            <Col className="blog-item">
              <Slider ref={this.reference} {...settings}>
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
              </Slider>
            </Col>
          </Row>
          <Row className="arrow-icons-wrap">
            <ArrowButton
              dark={false}
              leftArrow={true}
              altText="An arrow icon"
              onClick={this.previous}
            />
            <ArrowButton
              dark={false}
              leftArrow={false}
              altText="An arrow icon"
              onClick={this.next}
            />
          </Row>
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
`;

export default StyledBlog;
