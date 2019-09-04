import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Slider from "react-slick";
// tslint:disable-next-line
import "slick-carousel/slick/slick-theme.css";
// tslint:disable-next-line
import "slick-carousel/slick/slick.css";
import InstaImg01 from "../../img/instagram-1.png";
import styled from "../../styles/theme";
import StyledArrowButton from "../ArrowButton";
import ArrowLink from "../ArrowLink";
import InstagramItem from "../InstagramItem";

interface InstagramProps {
  className?: string;
}

class Instagram extends React.Component<InstagramProps> {
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
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section className={this.props.className}>
        <Grid className="container">
          <h1>Instagram</h1>
          <Row className="items-wrap">
            <Col className="instagram-item">
              <Slider ref={this.reference} {...settings} className="slider">
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
              </Slider>
            </Col>
          </Row>
          <Row />
          <Row className="arrow-icons-wrap">
            <ArrowLink
              text="Follow us on Instagram"
              link="#"
              instaFollowLink={true}
            />
            <StyledArrowButton
              dark={true}
              leftArrow={true}
              altText="An arrow icon"
              onClick={this.previous}
            />
            <StyledArrowButton
              dark={true}
              leftArrow={false}
              altText="An arrow icon"
              onClick={this.next}
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
