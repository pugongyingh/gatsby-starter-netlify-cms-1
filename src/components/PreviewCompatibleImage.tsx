import Img from "gatsby-image";
import React from "react";
import { MarkdownRemarkFrontmatterMainImage } from "../templates/product-page";

interface PreviewCompatibleImageProps {
  imageInfo: MarkdownRemarkFrontmatterMainImage;
}

const PreviewCompatibleImage: React.SFC<PreviewCompatibleImageProps> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!image && typeof image === "string") {
    return <img style={imageStyle} src={image} alt={alt} />;
  }

  return null;
};

export default PreviewCompatibleImage;
