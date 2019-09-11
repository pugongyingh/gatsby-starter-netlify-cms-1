import React from "react";
import { Col } from "react-flexbox-grid";
import { File } from "../graphql/types";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

interface Props {
  logo: File | string;
  title: string;
}

const TechnologyItem: React.FC<Props> = ({ logo, title }) => {
  return (
    <Col xs={4}>
      {<PreviewCompatibleImage image={logo} alt={title} />}
    </Col>
  );
};

export default TechnologyItem;