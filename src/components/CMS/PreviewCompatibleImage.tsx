import React from "react";
import { isString } from "util";
import { File, ImageSharp } from "../../graphql/types";

interface PreviewCompatibleImageProps {
  className?: string;
  image: string | File | ImageSharp,
  height?: string;
  width?: string;
  alt?: string
}

const PreviewCompatibleImage: React.SFC<PreviewCompatibleImageProps> = ({ alt, image, width, height, className }) => {
  const imageStyle = { borderRadius: "5px", width, height };

  const isImageSharp = (img: File | ImageSharp): img is ImageSharp => {
    return img.hasOwnProperty("fluid")
  }

  if (!isString(image)) {
    if (!isImageSharp(image)) {
      return <img className={className} style={imageStyle} src={image.publicURL!} alt={alt} />;
    }
    else {
      return null;
      // TODO: 
    }
  }

  else {
    return <img className={className} style={imageStyle} src={image} alt={alt} />;
  }

};

export default PreviewCompatibleImage;
