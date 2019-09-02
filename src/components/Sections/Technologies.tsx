import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import awsLogo from "../../img/aws-logo.svg";
import dockerLogo from "../../img/docker-logo.svg";
import javaLogo from "../../img/java-logo.svg";
import polymerLogo from "../../img/polymer-logo.svg";
import reactLogo from "../../img/react-logo.svg";
import swiftLogo from "../../img/swift-logo.svg";
import styled from "../../styles/theme";
import Logo from "../Logo";

interface Props {}

const TechnologiesWrap = styled.section`
  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 176.18%;
    color: ${props => props.theme.colors.paragraphGrey};
  }

  .logoRow {
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.screen.laptop} {
      &:nth-child(1) {
        margin-bottom: 70px;
      }
    }
  }
`;

const Technologies: React.FC<Props> = () => {
  return (
    <TechnologiesWrap className="technologies">
      <Grid className="container">
        <h1>Technologies</h1>
        <Row>
          <Col xs={12} sm={6}>
            <p>
              Skip it dawg pulp fiction chia pet. Napster khaki dolly the sheep
              beanie babies david duchovny lisa frank. Nerf guns hoop earrings.
            </p>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin.
            </p>
          </Col>
          <Col xs={12} smOffset={1} sm={4}>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={javaLogo} altText="A Java Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={reactLogo} altText="A React Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={awsLogo} altText="An Aws Logo" />
              </Col>
            </Row>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={polymerLogo} altText="A Polymer Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={swiftLogo} altText="A Swift Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={dockerLogo} altText="A Docker Logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </TechnologiesWrap>
  );
};

export default Technologies;
