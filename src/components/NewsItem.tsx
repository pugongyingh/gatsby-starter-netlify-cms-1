import React from "react";
import { Col } from "react-flexbox-grid";
import { File, Maybe } from "../graphql/types";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

interface Props {
  logo: Maybe<File> | string;
  heading: string;
  perex: string;
  alt: string;
}

const NewsItem: React.FC<Props> = ({ logo, heading, perex, alt }) => {
  return (
    <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
      {logo &&
        <PreviewCompatibleImage
          image={logo}
          alt={alt}
          height="90px"
          width="90px"
        />
      }
      <h2>{heading}</h2>
      <p>{perex}</p>
    </Col>
  );
};

export default NewsItem;
