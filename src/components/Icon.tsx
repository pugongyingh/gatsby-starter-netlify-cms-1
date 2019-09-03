import React from "react";

interface IconProps {
  className: string;
  source: string;
  altText: string;
  height: string;
  width: string;
}

const Icon: React.FC<IconProps> = props => {
  const { className, source, altText, height, width } = props;
  return (
    <img
      className={className}
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
