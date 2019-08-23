import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { File } from "../../@types/graphql";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";

import { device } from "../../styles/Device";
import { default as styled } from "../../styles/theme";

import logo from "../../img/logo.svg";

const HeaderWrap = styled.header`
  position: relative;
  height: 75vh;
  min-height: 14rem;
  width: 100%;
  overflow: hidden;
  background: url("src/img/home-bg.png") no-repeat center center scroll;
  background-size: cover;

  @media ${device.laptopL} {
    min-height: 1020px;
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.black};
    opacity: 0.5;
    z-index: 1;
  }

  .text-wrap {
    position: relative;
    z-index: 2;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: "Muli";
  }

  .grid {
    flex-basis: 70%;
    color: white;
  }

  img {
    width: 78px;
    height: 85px;
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 128%;
    letter-spacing: 0.03em;
    margin: 40px 0;

    @media ${device.tablet} {
      font-size: 60px;
    }
  }

  button {
    width: 197px;
    height: 57px;
    background: linear-gradient(256.03deg, #ffc700 -2.02%, #fed500 103.08%);
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
  }

  @media ${device.laptop} {
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 38px;
      position: relative;
      top: 50px;
      left: 50px;
    }
  }

  .col-1 {
    display: flex;
    flex-wrap: wrap;
  }

  .col-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

interface HeaderProps {
  title: string;
  subheading: string;
  hero: File;
}

const Header: React.SFC<HeaderProps> = ({ hero, title, subheading }) => {
  return (
    <HeaderWrap>
      {/* {hero.ext.match(/.(jpg|jpeg|png|gif)$/i) ? (
        <PreviewCompatibleImage
          imageInfo={{
            image: hero,
            alt: `Starky's club`
          }}
        />
      ) : hero.ext.match(/.(mp4)$/i) ? (
        <video
          src={hero.publicURL}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      ) : null} */}

      <video
        src={hero.publicURL}
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <div className="overlay" />
      <div className="text-wrap">
        <Grid className="grid" fluid={true}>
          <Row>
            <Col className="col-1" xs={12} md={6}>
              <img src={logo} />
              <h1>{title}</h1>
              <button>Work with us</button>
            </Col>
            <Col className="col-2" xs={12} md={6}>
              <p>{subheading}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </HeaderWrap>
  );
};

export default Header;
