import React from "react";
import Dotdotdot from 'react-dotdotdot';
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
      <Dotdotdot clamp={6}><p>{instaText}</p></Dotdotdot>
    </div>
  );
};

const StyledInstagramItem = styled(InstagramItem)`
  max-width: 420px !important;

  @media ${props => props.theme.screen.tablet} {
  	margin-right: 20px;
  }

  @media ${props => props.theme.screen.laptopL} {
  	margin-right: 50px;
  }


  .img {
    height: 400px;
    background: url(${props => props.src}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledInstagramItem;
