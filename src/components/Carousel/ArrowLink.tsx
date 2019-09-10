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
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  link,
  text,
  instaFollowLink,
  white,
  className
}) => {
  const classes = [className];

  if (instaFollowLink) {
    classes.push("followLink")
  }

  if (white) {
    classes.push("white");
  }
  return (
    <StyledLink className={classes.join(" ")}>
      <a href={link}>
        {text} <img src={arrow} />
      </a>
    </StyledLink>
  );
};

export default ArrowLink;
