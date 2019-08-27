import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { isString } from "util";
import { File, Maybe } from "../../graphql/types";
import logo from "../../img/logo.svg";
import { default as styled, SCP } from "../../styles/theme";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";


interface P extends SCP {
  title: Maybe<string>;
  subheading: Maybe<string>;
  hero: string | File;
}

const HeaderTemplate: React.SFC<P> = ({ hero, title, subheading, className }) => {
  const file = isString(hero) ? hero : hero.base!

  return (
    <header className={className}>
      {file.match(/.(jpg|jpeg|png|gif)$/i) ? (
        <PreviewCompatibleImage
          imageInfo={{
            image: hero,
            alt: title || ""
          }}
        />
      ) : file.match(/.(mp4|ogg|wmv|ftv|mov)$/i) ? (
        <video
          src={isString(hero) ? hero : hero.publicURL}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      ) : null}

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
    </header>
  );
};

const Header = styled(HeaderTemplate)`
  position: relative;
  height: 75vh;
  min-height: 14rem;
  width: 100%;
  overflow: hidden;
  background: url("src/img/home-bg.png") no-repeat center center scroll;
  background-size: cover;

  @media ${(props) => props.theme.screen.laptopL} {
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

    @media ${(props) => props.theme.screen.tablet} {
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

  @media ${(props) => props.theme.screen.laptop} {
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

export default Header;
