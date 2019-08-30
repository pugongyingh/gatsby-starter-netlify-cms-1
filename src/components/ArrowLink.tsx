import React from "react";
import arrow from "../img/right-arrow.svg";
import { default as styled } from "../styles/theme";
import Icon from "./Icon";

interface ArrowLinkProps {
  link: string;
  text: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ link, text }) => {
  return (
    <div className="link">
      <a href={link}>
        {text} <img src={arrow} />
      </a>
    </div>
  );
};

const ArrowLinkStyled = styled(ArrowLink)`
  .link {
    img {
      margin: auto;
      height: 1.5em;
      width: 5em;
    }
  }
`;

export default ArrowLinkStyled;
