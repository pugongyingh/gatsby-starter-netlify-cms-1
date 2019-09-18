import React from "react";
import { Col } from "react-flexbox-grid";
import { File } from "../graphql/types";
import styled from "../styles/theme";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

interface Props {
  logo: File | string;
  alt: string;
  className: string;
}

const StyledCol = styled(Col)`
  img {
    width: 100%;
    min-height: 80px;
    max-height: 80px;
    padding: 15px 0;

    &.redux-logo {
      min-height: 60px;
      max-height: 60px;
    }

    @media ${props => props.theme.screen.laptop} {
      min-height: initial;
    }
  }
`;

const TechnologyItem: React.FC<Props> = ({ logo, alt, className }) => {
  return (
    <StyledCol xs={4}>
      {<PreviewCompatibleImage className={className} image={logo} alt={alt} />}
    </StyledCol>
  );
};

export default TechnologyItem;
