import React from "react";
import styled from "../styles/theme";

interface SocialIconProps {
  source: string;
  altText: string;
}

const Image = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`;

const SocialIcon: React.FC<SocialIconProps> = props => {
  const { source, altText } = props;
  return <Image src={source} alt={altText} />;
};

export default SocialIcon;
