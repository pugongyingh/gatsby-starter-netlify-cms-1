import React from "react";
import { Col } from "react-flexbox-grid";
import Image from "./Image";

interface InstagramItemProps {
  src: string;
  alt: string;
  instaText: string;
}

const InstagramItem: React.FC<InstagramItemProps> = ({
  src,
  alt,
  instaText
}) => {
  return (
    <Col className="instagram-item" xs={12} sm={4}>
      <Image source={src} altText={alt} />
      <p>{instaText}</p>
    </Col>
  );
};

export default InstagramItem;
