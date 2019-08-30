import React from "react";

interface IconProps {
  source: string;
  altText: string;
  height: string;
  width: string;
}

const Icon: React.FC<IconProps> = props => {
  const { source, altText, height, width } = props;
  return (
    <img
      src={source}
      alt={altText}
      style={{
        width,
        height
      }}
    />
  );
};

export default Icon;
