import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { File } from "../../@types/graphql";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

import { default as styled } from "../../styles/theme";

import logo from "../../img/logo.svg";

const HeaderWrap = styled.header`
  position: relative;
  background-color: ${props => props.theme.colors.danger};
  height: 75vh;
  min-height: 14rem;
  width: 100%;
  overflow: hidden;

  background: url("src/img/home-bg.png") no-repeat center center scroll;

  background-size: cover;

  /* @media (pointer: coarse) and (hover: none) {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
  } */
`;

// const Video = styled.video`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   min-width: 100%;
//   min-height: 100%;
//   width: auto;
//   height: auto;
//   z-index: 0;
//   -ms-transform: translateX(-50%) translateY(-50%);
//   -moz-transform: translateX(-50%) translateY(-50%);
//   -webkit-transform: translateX(-50%) translateY(-50%);
//   transform: translateX(-50%) translateY(-50%);
// `;

const TextWrap = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: "Muli";
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`;

const CustomGrid = styled(Grid)`
  flex-basis: 70%;
  color: white;
`;

const Logo = styled.img`
  width: 78px;
  height: 85px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 128%;
  letter-spacing: 0.03em;
`;

const Button = styled.button`
  width: 197px;
  height: 57px;
  background: linear-gradient(256.03deg, #ffc700 -2.02%, #fed500 103.08%);
  border-radius: 1px;
  color: white;
  font-size: 18px;
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
        <Video
          src={hero.publicURL}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      ) : null} */}

      <PreviewCompatibleImage
        imageInfo={{
          image: hero,
          alt: `Starky's club`
        }}
      />
      <Overlay className="overlay" />
      <TextWrap>
        <CustomGrid fluid={true}>
          <Row>
            <Col xs={12} md={6}>
              <Logo src={logo} />
              <H1>{title}</H1>
              <Button>Work with us</Button>
            </Col>
            <Col xs={12} md={6}>
              <p>{subheading}</p>
            </Col>
          </Row>
        </CustomGrid>
      </TextWrap>
    </HeaderWrap>
  );
};

export default Header;
