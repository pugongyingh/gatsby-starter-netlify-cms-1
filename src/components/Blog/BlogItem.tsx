import React from "react";
import { isString } from "util";
import { File } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import ArrowLinkStyled from "../Carousel/ArrowLink";

interface BlogItemProps extends SCP {
  image: File;
  title: string;
  description: string;
  slug: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  slug,
  className
}) => {
  return (
    <div className={className}>
      <div className="img" />
      <h2>{title}</h2>
      <p>{description}</p>
      <ArrowLinkStyled
        text="See article"
        link={slug}
        instaFollowLink={false}
        white={true}
        className="link"
      />
    </div>
  );
};

const StyledBlogItem = styled(BlogItem)`
  width: 100%;

  .img {
    height: 400px;
    background: url(${props => isString(props.image) ? props.image : props.image.publicURL!}) no-repeat center center scroll;
    background-size: cover;

    @media ${props => props.theme.screen.tablet} {
      margin-right: 20px;
    }

    @media ${props => props.theme.screen.laptopL} {
      margin-right: 40px;
    } 
  }

  .link {
    margin: 30px 0;
  }
`;

export default StyledBlogItem;