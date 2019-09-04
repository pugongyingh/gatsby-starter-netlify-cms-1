import Img, { FluidObject } from "gatsby-image";
import React from "react";
import { isString } from "util";
import { File } from "../../graphql/types";

interface PreviewCompatibleImageProps {
  className?: string;
  imageInfo: {
    image: string | File,
    alt?: string
  }
}

const PreviewCompatibleImage: React.SFC<PreviewCompatibleImageProps> = ({ imageInfo, className }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt, image } = imageInfo;

  if (!isString(image)) {
    if(image.childImageSharp) {
      return (
        <Img className={className} style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
      );
    }
    return <img className={className} style={imageStyle} src={image.publicURL} alt={alt} />;
  }

  else {
    return <img className={className} style={imageStyle} src={image} alt={alt} />;
  }

};

export default PreviewCompatibleImage;
