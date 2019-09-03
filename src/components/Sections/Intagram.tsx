import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import InstaImg01 from "../../img/instagram-1.png";
import styled from "../../styles/theme";
import ArrowButton from "../ArrowButton";
import ArrowLink from "../ArrowLink";
import InstagramItem from "../InstagramItem";

interface InstagramProps {}

const InstagramWrap = styled.section`
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

class Intagram extends React.Component<InstagramProps> {
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
      <InstagramWrap className="instagram">
        <Grid className="container">
          <h1>Instagram</h1>
          <Row className="items-wrap">
            <Col className="instagram-item">
              <Slider ref={this.reference} {...settings}>
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
            <ArrowButton
              dark={true}
              leftArrow={true}
              altText="An arrow icon"
              onClick={this.next}
            />
            <ArrowButton
              dark={true}
              leftArrow={false}
              altText="An arrow icon"
              onClick={this.previous}
            />
          </Row>
        </Grid>
      </InstagramWrap>
    );
  }
}

export default Intagram;
