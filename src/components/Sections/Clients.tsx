import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";
import Icon from "../Icon";

import lenovoLogo from "../../img/lenovo_logo.svg";
import logitechLogo from "../../img/logitech_logo.svg";
import ubisoftLogo from "../../img/ubisoft_logo.svg";
import xboxLogo from "../../img/xbox_logo.svg";

const ClientsSection = styled.section`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  /*height: 40vh;*/
  @media ${props => props.theme.screen.laptop} {
    padding: 7.5rem 0;
  }

  .container {
    .row {
      padding-top: 4vh;
    }
    .col {
      display: flex;
      justify-content: center;
      margin: -1px;
    }
  }
  .vertical {
    border-right: 1px solid #6c6c6c;
  }
`;
interface ClientsProps {}

const Clients: React.FC<ClientsProps> = () => {
  return (
    <ClientsSection>
      <Grid className="container">
        <h1>Our Clients</h1>
        <Row />
        <Row className="row">
          <Col lg={3} xs={12} className="col">
            <Icon source={xboxLogo} altText="" width="198px" height="198px" />
          </Col>
          <span className="vertical" />
          <Col lg={3} xs={12} className="col">
            <Icon
              source={logitechLogo}
              altText=""
              width="198px"
              height="198px"
            />
          </Col>
          <span className="vertical" />
          <Col lg={3} xs={12} className="col">
            <Icon source={lenovoLogo} altText="" width="198px" height="198px" />
          </Col>
          <span className="vertical" />
          <Col lg={3} xs={12} className="col">
            <Icon
              source={ubisoftLogo}
              altText=""
              width="198px"
              height="198px"
            />
          </Col>
        </Row>
      </Grid>
    </ClientsSection>
  );
};

export default Clients;
