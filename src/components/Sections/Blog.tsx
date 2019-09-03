import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import blogImgOne from "../../img/blog-1.png";
import styled from "../../styles/theme";
import ArrowButton from "../ArrowButton";
import Image from "../Image";

interface Props {}

const BlogWrap = styled.section`
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

  .blog-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${props => props.theme.screen.laptop} {
      margin-top: 100px;

      .blog-item {
        max-width: 420px;

        h2 {
          margin-top: 70px;
        }
      }
    }
  }

  .arrow-icons-wrap {
    justify-content: flex-end;
  }
`;

const Blog: React.FC<Props> = () => {
  return (
    <BlogWrap id="blog">
      <Grid className="container">
        <h1>Blog</h1>
        <Row className="blog-wrap">
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
        </Row>
        <Row className="arrow-icons-wrap">
          <ArrowButton dark={false} leftArrow={true} altText="An arrow icon" />
          <ArrowButton dark={false} leftArrow={false} altText="An arrow icon" />
        </Row>
      </Grid>
      {/* <BlogRoll /> */}
    </BlogWrap>
  );
};

export default Blog;
