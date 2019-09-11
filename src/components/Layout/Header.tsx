import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { isString } from "util";
import { File, Maybe } from "../../graphql/types";
import logo from "../../img/logo.svg";
import { css, default as styled, SCP } from "../../styles/theme";
import Icon from "../Icon";

interface P extends SCP {
  title: Maybe<string>;
  subheading: Maybe<string>;
  hero: string | File;
}

const HeaderTemplate: React.SFC<P> = ({
  hero,
  title,
  subheading,
  className
}) => {
  const file = isString(hero) ? hero : hero.base!;

  return (
    <header className={className}>
      <div>
        {file.match(/.(mp4|ogg|wmv|ftv|mov)$/i) && (
          <video
            src={isString(hero) ? hero : hero.publicURL}
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        )}
        <div className="overlay" />
        <div className="text-wrap">
          <Grid className="grid" fluid={true}>
            <Row>
              <Col className="logo-section" xs={12} lg={6}>
                <Icon
                  className="starkyslogo"
                  source={logo}
                  height="85px"
                  width="78px"
                  altText="Starkys Logo"
                />
                <h1>{title}</h1>
                <button>Work with us</button>
              </Col>
              <Col className="text-section" xs={12} lg={6}>
                <p>{subheading}</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </header>
  );
};

const Header = styled(HeaderTemplate)`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  ${({ hero }) => {
    const file = isString(hero) ? hero : hero.publicURL!;
    if (file.match(/.(jpg|jpeg|png|gif)$/i)) {
      return css`
        background: url(${file}) no-repeat center center scroll;
        background-size: cover;
      `;
    }
  }}

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

  ${({ hero }) => {
    const file = isString(hero) ? hero : hero.publicURL!;
    if (!file.match(/.(jpg|jpeg|png|gif)$/i)) {
      return css`
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
      `;
    }
  }}

  .text-wrap {
    position: absolute;
    z-index: 2;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: "Muli";
  }

  .grid {
    flex-basis: 85%;
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

    @media ${props => props.theme.screen.tablet} {
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

  @media ${props => props.theme.screen.laptop} {
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

  .logo-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    @media ${props => props.theme.screen.tablet} {
      .starkyslogo {
        width: 178px !important;
        height: 185px !important;
      }
    }

    @media ${props => props.theme.screen.laptopL} {
      justify-content: center;
      text-align: left;

      .starkyslogo {
        width:78px;
        height: 85px;
      }
    }
  }

  .text-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media ${props => props.theme.screen.laptopL} {
      margin-top: 0;
    }
  }
`;

export default Header;
