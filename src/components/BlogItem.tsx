import React from "react";
import styled from "../styles/theme";
import Image from "./Image";

const BlogItemWrap = styled.div`
  max-width: 400px;
`;

interface BlogItemProps {
  src: string;
  alt: string;
  sub: string;
  blogText: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ src, alt, blogText, sub }) => {
  return (
    <BlogItemWrap>
      <Image source={src} altText={alt} />
      <h2>{sub}</h2>
      <p>{blogText}</p>
    </BlogItemWrap>
  );
};

export default BlogItem;
