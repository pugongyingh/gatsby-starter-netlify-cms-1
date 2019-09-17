import React from "react";
import { Col, Row } from "react-flexbox-grid";
// import ArrowLink from "../components/Carousel/ArrowLink";
import { File } from "../graphql/types";
import styled from "../styles/theme";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

const StyledPCI = styled(PreviewCompatibleImage)`
  width: 100%;
  height: auto;
`

interface Props {
  image: File | string;
  title: string;
  subtitle: string;
  description: string;
  odd: boolean;
}

const ReferenceItem: React.FC<Props> = ({
  image,
  title,
  subtitle,
  description,
  odd,
}) => {
  return (
    <Row className={`section-row ${odd ? "odd" : null}`}>
      <Col xs={12} md={6} lg={odd? 6 : 5} lgOffset={odd? 1 : 0} >
        {<StyledPCI image={image} alt={title} />}
      </Col>
      <Col className="ref-content" xs={12} md={6} lgOffset={odd? 0 : 1} lg={odd? 5 : 6}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        {/* <ArrowLink link={link} text="See live site" instaFollowLink={true} /> */}
      </Col>
    </Row>
  );
};

export default ReferenceItem;
