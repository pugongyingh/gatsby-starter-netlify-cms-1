import React from "react";
import styled from "../styles/theme";

interface ImageProps {
  source: string;
  altText: string;
  className?: string;
}

const ResponsiveImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image: React.FC<ImageProps> = props => {
  const { className, source, altText } = props;
  return (
    <div>
      <ResponsiveImg className={className} src={source} alt={altText} />;
    </div>
  );
};

export default Image;
