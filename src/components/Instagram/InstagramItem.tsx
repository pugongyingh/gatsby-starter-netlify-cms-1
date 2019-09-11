import React from "react";
import styled from "../../styles/theme";
import Image from "../Image";

interface InstagramItemProps {
  src: string;
  alt: string;
  instaText: string;
  className?: string;
}

const InstagramItem: React.FC<InstagramItemProps> = ({
  src,
  alt,
  instaText,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      {/*<Image source={src} altText={alt} />*/}
      <p>{instaText}</p>
    </div>
  );
};

const StyledInstagramItem = styled(InstagramItem)`
    max-width: 440px;
    .img {
    height: 440px;
    background: url(${props => props.src}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledInstagramItem;
