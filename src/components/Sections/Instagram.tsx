import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import InstaImg01 from "../../img/instagram-1.png";
import styled from "../../styles/theme";
import ArrowLink from "../ArrowLink";
import Carousel from "../Carousel";
import InstagramItem from "../InstagramItem";

interface InstagramProps {
  className?: string;
}

class Instagram extends React.Component<InstagramProps> {
  public render() {
    return (
      <section className={this.props.className}>
        <Grid className="container">
          <h1>Instagram</h1>
          <Row className="items-wrap">
            <Col className="instagram-item">
              <Carousel dark={true}>
                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />

                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />
                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />
                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />
                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />
                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />

                <InstagramItem
                  src={InstaImg01}
                  alt="Instagram item 1"
                  instaText="Prow scuttle parrel provost Sail ho 
            shrouds spirits boom mizzenmast yardarm. 😎 #starkysclub"
                />
              </Carousel>
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
      </section>
    );
  }
}

const StyledInstagram = styled(Instagram)`
  .items-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .instagram-item {
    width: 100%;
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
`;

export default StyledInstagram;
