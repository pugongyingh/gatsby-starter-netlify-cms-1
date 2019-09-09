import React from "react";
import styled from "../styles/theme";
import ArrowLinkStyled from "./ArrowLink";
import Image from "./Image";

interface BlogItemProps {
  src: string;
  alt: string;
  sub: string;
  blogText: string;
  className?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  src,
  alt,
  blogText,
  sub,
  className
}) => {
  return (
    <div className={className}>
      <Image source={src} altText={alt} />
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
  max-width: 400px;
`;

export default StyledBlogItem;
