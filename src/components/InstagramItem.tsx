import React from "react";
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
    <div>
      <Image source={src} altText={alt} />
      <p>{instaText}</p>
    </div>
  );
};

export default InstagramItem;
