import React from "react";
import { isString } from "util";
import { File } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import ArrowLinkStyled from "../Carousel/ArrowLink";

interface BlogItemProps extends SCP {
  image: File;
  title: string;
  description: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      <h2>{title}</h2>
      <p>{description}</p>
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
    background: url(${props => isString(props.image) ? props.image : props.image.publicURL!}) no-repeat center center scroll;
    background-size: cover;
  }
`;

export default StyledBlogItem;