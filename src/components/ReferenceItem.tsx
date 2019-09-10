import React from "react";
import { Col, Row } from "react-flexbox-grid";
import ArrowLink from "../components/Carousel/ArrowLink";
import Image from "../components/Image";

interface Props {
  src: string;
  alt: string;
  heading: string;
  subheading: string;
  perex: string;
  link: string;
}

const ReferenceItem: React.FC<Props> = ({
  src,
  alt,
  heading,
  subheading,
  perex,
  link
}) => {
  return (
    <Row className="section-row">
      <Col xs={12} sm={6} lg={5}>
        <Image source={src} altText={alt} />
      </Col>
      <Col className="ref-content" xs={12} sm={6} lgOffset={1} lg={6}>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <p>{perex}</p>
        <ArrowLink link={link} text="See live site" instaFollowLink={true}/>
      </Col>
    </Row>
  );
};

export default ReferenceItem;
