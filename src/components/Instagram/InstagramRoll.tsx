import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { InstaNode, Query } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import ArrowLink from "../Carousel/ArrowLink";
import StyledCarousel from "../Carousel/Carousel";
import StyledInstagramItem from "./InstagramItem";

interface P extends SCP {
  instagramPosts: InstaNode[];
}

class Instagram extends React.Component<P> {
  public render() {
    return (
      <div className={this.props.className}>
        <Grid className="container">
          <h1>Instagram</h1>
          <Row className="instagram-items-wrap">
            <Col className="instagram-item">
              <StyledCarousel dark={true}>
                {this.props.instagramPosts && this.props.instagramPosts.map((post: InstaNode) => {
                  return (
                    <StyledInstagramItem
                      key={post.id}
                      src={post.original!}
                      alt={post.caption!}
                      instaText={post.caption!}
                    />
                  )
                })}
              </StyledCarousel>
            </Col>
          </Row>
          <Row />
          <Row className="arrow-icons-wrap">
            <ArrowLink
              text="Follow us on Instagram"
              link="#"
              instaFollowLink={true}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

const StyledInstagram = styled(Instagram)`

.instagram-items-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .slick-slider {
    margin-right: -6rem;
  }
  .instagram-item {
    width: 100%;
    overflow: hidden;
  }

  @media ${props => props.theme.screen.laptop} {
    .slider {
      margin-right: 2px;
    }
    h2 {
      margin-top: 70px;
    }
  }
  .arrow-icons-wrap {
    height: 8vh;
    display: flex;
    align-items: flex-end;
  }

  .followLink {
    margin-right: auto;
  }
}
`;


const InstagramRoll: React.SFC<Omit<P, "instagramPosts">> = props => {
  return (
    <StaticQuery
      query={graphql`
              query InstagramRollQuery {
                allInstaNode(sort: {order: DESC, fields: timestamp}) {
                  edges {
                    node {
                      ...InstaNodeInfo
                    }
                  }
                }
              }
            `}
      render={(instagramPosts: Query) => <StyledInstagram instagramPosts={instagramPosts.allInstaNode.edges.map((edge) => edge.node)} {...props} />}
    />
  );
};

export default InstagramRoll;
