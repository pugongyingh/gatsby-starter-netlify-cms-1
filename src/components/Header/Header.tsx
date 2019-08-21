import React from "react";
import styled from "styled-components";
import { File } from "../../@types/graphql";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

// import background from "src/img/home-bg.png";

// import { Col, Grid, Row } from "react-styled-flexboxgrid";

const HeaderWrap = styled.header`
  position: relative;
  background-color: black;
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

  /* @media (pointer: coarse) and (hover: none) {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
  } */
`;

const Video = styled.video`
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

  /* @media (pointer: coarse) and (hover: none) {
    display: none;
  } */
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
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

interface HeaderProps {
  title: string;
  subheading: string;
  // image: any | Image;
  hero: File;
}

const Header: React.SFC<HeaderProps> = ({ hero, title, subheading }) => {
  return (
    <HeaderWrap>
      {hero.ext.match(/.(jpg|jpeg|png|gif)$/i) ?
        <PreviewCompatibleImage
          imageInfo={{
            image: hero,
            alt: `Starky's club`
          }}
        /> : hero.ext.match(/.(mp4)$/i) ?
          <Video
            src={hero.publicURL}
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
          /> : null
      }
      <Overlay className="overlay" />
      <Container>
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">{title}</h1>
            <p className="lead mb-0">{subheading}</p>
          </div>
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
