import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { isString } from "util";
import { File, Maybe } from "../graphql/types";
import logo from "../img/logo.svg";

interface VideoProps {
  logo: Maybe<string>;
  title: Maybe<string>;
  subheading: Maybe<string>;
  hero: string | File;
}

const Video: React.SFC<VideoProps> = ({ hero, title, subheading }) => {
  const file = isString(hero) ? hero : hero.base!;
  return (
    <div>
      <video
        src={isString(hero) ? hero : hero.publicURL}
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
    </div>
  );
};
