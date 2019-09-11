import React from "react";
import styled, { SCP } from "../../styles/theme";
import ArrowLinkStyled from "../Carousel/ArrowLink";

interface BlogItemProps extends SCP {
  image: string;
  subtitle: string;
  blogText: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  blogText,
  subtitle,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      <h2>{subtitle}</h2>
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
  max-width: 400px;
  .img {
    height: 460px;
    background: url(${props => props.image}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledBlogItem;