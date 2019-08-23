import Img from "gatsby-image";
import React from "react";
import { isString } from "util";
import { File } from "../graphql/types";

interface PreviewCompatibleImageProps {
  imageInfo: {
    image?: string | File,
    alt?: string
  }
}

const PreviewCompatibleImage: React.SFC<PreviewCompatibleImageProps> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt, image } = imageInfo;

  if (!image) {
    return null;
  }


  if (!isString(image)) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  else {
    return <img style={imageStyle} src={image} alt={alt} />;
  }

};

export default PreviewCompatibleImage;
