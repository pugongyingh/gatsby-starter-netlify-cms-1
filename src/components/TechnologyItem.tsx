import React from "react";
import { Col } from "react-flexbox-grid";
import Logo from "../components/Logo";

interface Props {
  source: string;
  alt: string;
}

const TechnologyItem: React.FC<Props> = ({ source, alt }) => {
  return (
    <Col xs={4}>
      <Logo source={source} altText={alt} />
    </Col>
  );
};

export default TechnologyItem;