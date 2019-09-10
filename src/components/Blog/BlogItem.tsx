import React from "react";
import styled from "../../styles/theme";
import ArrowLinkStyled from "../Carousel/ArrowLink";

interface BlogItemProps {
  src: string;
  sub: string;
  blogText: string;
  className?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  blogText,
  sub,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      <h2>{sub}</h2>
      <p>{blogText}</p>
      <ArrowLinkStyled
        text="See article"
        link="#"
        instaFollowLink={false}
        white={true}
      />
    </div>
  );
};

const StyledBlogItem = styled(BlogItem)`
  width: 100%;
  max-width: 440px;
  .img {
    height: 400px;
    background: url(${props => props.src}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledBlogItem;