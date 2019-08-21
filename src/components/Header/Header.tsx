import React from "react";
import styled from "styled-components";

import { Col, Grid, Row } from "react-styled-flexboxgrid";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

interface HeaderProps {
  title: string;
  subheading: string;
  // image: any | Image;
  video: string;
}

// const isImageType = (obj: string | Image): obj is Image => {
//   return obj.hasOwnProperty("childImageSharp");
// };

const Header: React.SFC<HeaderProps> = ({ video, title, subheading }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <header>
            <div className="overlay" />
            <video
              src={video}
              type="video/mp4"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            />
            <div className="container h-100">
              <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white">
                  <h1 className="display-3">{title}</h1>
                  <p className="lead mb-0">{subheading}</p>
                </div>
              </div>
            </div>
          </header>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
