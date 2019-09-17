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
    width: 100%;
    min-height: 80px;
    max-height: 80px;

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
