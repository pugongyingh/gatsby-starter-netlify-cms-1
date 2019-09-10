import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Image from "../components/Image";

interface Props {
    src: string;
    alt: string;
    heading: string;
    subheading: string;
    perex: string;
}

const ReferenceItem: React.FC<Props> = ( {src, alt, heading, subheading, perex }) => {
  return (
    <Row className="section-row">
      <Col xs={12} sm={6} lg={5}>
        <Image source={src} altText={alt} />
      </Col>
      <Col className="ref-content" xs={12} sm={6} lgOffset={1} lg={6}>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <p>
          {perex}
        </p>
      </Col>
    </Row>
  );
};

export default ReferenceItem;