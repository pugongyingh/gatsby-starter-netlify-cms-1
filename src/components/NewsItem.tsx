import React from "react";
import { Col } from "react-flexbox-grid";
import Icon from "../components/Icon";

interface Props {
  wwdIcon: string;
  heading: string;
  perex: string;
  alt: string;
}

const NewsItem: React.FC<Props> = ({ wwdIcon, heading, perex, alt }) => {
  return (
    <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
      <Icon
        className=""
        source={wwdIcon}
        altText={alt}
        height="90px"
        width="90px"
      />
      <h2>{heading}</h2>
      <p>{perex}</p>
    </Col>
  );
};

export default NewsItem;
