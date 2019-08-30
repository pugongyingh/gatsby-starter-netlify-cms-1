import React from "react";
import arrow from "../img/right-arrow.svg";
import { default as styled } from "../styles/theme";

const StyledLink = styled.div`
  a {
    display: flex;
    align-content: center;
  }
  img {
    padding-left: 0.25em;
  }
`;

interface ArrowLinkProps {
  link: string;
  text: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ link, text }) => {
  return (
    <StyledLink>
      <a href={link}>
        {text} <img src={arrow} />
      </a>
    </StyledLink>
  );
};

export default ArrowLink;
