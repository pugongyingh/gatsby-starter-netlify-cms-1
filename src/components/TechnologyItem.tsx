import React from "react";
import { Col } from "react-flexbox-grid";
import Logo from "../components/Logo";
import { File } from "../graphql/types";

interface Props {
  logo: File;
  title: string;
}

const TechnologyItem: React.FC<Props> = ({/* logo, title */ }) => {
  return (
    <Col xs={4}>
      {/*<Logo source={logo} altText={title} />*/}
    </Col>
  );
};

export default TechnologyItem;