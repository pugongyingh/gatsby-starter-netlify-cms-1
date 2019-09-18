import React from "react";
import styled from "../../styles/theme";

interface InstagramItemProps {
  src: string;
  alt: string;
  instaText: string;
  className?: string;
}

const InstagramItem: React.FC<InstagramItemProps> = ({
  instaText,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      <p>{instaText}</p>
    </div>
  );
};

const StyledInstagramItem = styled(InstagramItem)`
  max-width: 420px !important;
	margin-right: 50px;

  .img {
    height: 400px;
    background: url(${props => props.src}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledInstagramItem;
