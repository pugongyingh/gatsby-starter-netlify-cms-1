import React from "react";
import { Col } from "react-flexbox-grid";
import { File } from "../graphql/types";
import styled from "../styles/theme";
import PreviewCompatibleImage from "./CMS/PreviewCompatibleImage";

interface Props {
  logo: File | string;
  title: string;
}

const StyledCol = styled(Col)`
  img {
    max-width: 100px;
    width: 100%;
    height: auto;
    min-height: 85px;

    @media ${props => props.theme.screen.laptop} {
      min-height: initial;
    }
  }
`;

const TechnologyItem: React.FC<Props> = ({ logo, title }) => {
  return (
    <StyledCol xs={4}>
      {<PreviewCompatibleImage image={logo} alt={title} />}
    </StyledCol>
  );
};

export default TechnologyItem;
