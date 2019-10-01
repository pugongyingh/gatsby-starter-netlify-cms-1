import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled, { SCP } from "../../styles/theme";
import ArrowLink from "../Carousel/ArrowLink";
import StyledCarousel from "../Carousel/Carousel";
import StyledInstagramItem from "./InstagramItem";

import axios from "axios";
import { buildUrl } from "react-instafeed";

interface P extends SCP {}
interface S {
  data: {
    data: any[];
    meta: any;
    pagination: any;
  };
}

class Instagram extends React.Component<P, S> {
  public state = {
    data: {
      data: [],
      meta: {},
      pagination: {}
    }
  };
  public options = {
    accessToken: "7763124834.1677ed0.c8d4afaaf6c647aead26789aea7810f8",
    clientId: "0c9c5ef1006742bdbde5c499ad636d22",
    get: "user", // popular, user
    locationId: null,
    resolution: "standard_resolution", // thumbnail, low_resolution, standard_resolution
    sortBy: "none", // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 7763124834,
    limit: 12
  };

  public componentDidMount() {
    axios.get(buildUrl(this.options)).then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  public render() {
    const { data: stateData } = this.state;

    const { data } = stateData;
    // console.log("data log", data);

    return (
      <section className={this.props.className}>
        <Grid className="container">
          <h1>Instagram</h1>
          <Row className="instagram-items-wrap">
            <Col className="instagram-item">
              <StyledCarousel dark={true}>
                {// eslint-disable-next-line no-unused-vars
                data &&
                  data.map(({ caption, id, images }: any) => {
                    const image = images[this.options.resolution];
                    return (
                      <StyledInstagramItem
                        key={id}
                        src={image.url}
                        alt={caption.text}
                        instaText={caption.text}
                      />
                    );
                  })}
              </StyledCarousel>
            </Col>
          </Row>
          <Row className="arrow-icons-wrap">
            <ArrowLink
              text="Follow us on Instagram"
              link="https://www.instagram.com/starkysclub/"
              instaFollowLink={true}
              externalLink={true}
            />
          </Row>
        </Grid>
      </section>
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
      margin-right: -2rem;
    }
    .instagram-item {
      width: 100%;
      overflow: hidden;
    }
    @media ${props => props.theme.screen.mobileS} {
      .slick-slider {
        margin-right: 0;
      }
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
  }
  .followLink {
    margin-top: 3vh;
    margin-right: auto;
  }
`;

const InstagramRoll: React.SFC<Omit<P, "instagramPosts">> = props => {
  return <StyledInstagram />;
};

export default InstagramRoll;
