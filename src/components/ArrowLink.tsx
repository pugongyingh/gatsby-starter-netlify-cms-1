import React from "react";
import arrow from "../img/right-arrow.svg";
import { default as styled } from "../styles/theme";

const StyledLink = styled.div`
  a {
    display: flex;
    align-content: center;
    text-decoration: none;
    color: ${props => props.theme.colors.paragraphGrey};
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 128%;
    letter-spacing: 0.03em;
  }
  img {
    padding-left: 0.25em;
  }
`;

interface ArrowLinkProps {
  link: string;
  text: string;
  instaFollowLink: boolean;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  link,
  text,
  instaFollowLink
}) => {
  return (
    <StyledLink className={instaFollowLink ? "followLink" : ""}>
      <a href={link}>
        {text} <img src={arrow} />
      </a>
    </StyledLink>
  );
};

export default ArrowLink;
