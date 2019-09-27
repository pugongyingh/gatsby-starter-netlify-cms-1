import GatsbyLink from "gatsby-link";
import React from "react";
import arrow from "../../img/right-arrow.svg";
import { default as styled } from "../../styles/theme";

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
    position: relative;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    padding-left: 0.25em;
  }
  
  &.white {
    a {
      color: white;
    }
  }
`;

interface ArrowLinkProps {
  link: string;
  text: string;
  instaFollowLink: boolean;
  white?: boolean;
  className?: string;
  externalLink: boolean;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  link,
  text,
  instaFollowLink,
  white,
  className,
  externalLink
}) => {
  const classes = [className];

  if (instaFollowLink) {
    classes.push("followLink");
  }

  if (white) {
    classes.push("white");
  }
  return (
    <StyledLink className={classes.join(" ")}>
      {externalLink ? (
        <a href={link} target="_blank">
          {text} <img src={arrow} />
        </a>
      ) : (
        <GatsbyLink to={link} replace={false}>
          {text} <img src={arrow} />
        </GatsbyLink>
      )}
    </StyledLink>
  );
};

export default ArrowLink;
