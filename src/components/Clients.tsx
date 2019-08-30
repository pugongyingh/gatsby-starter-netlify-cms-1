import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../styles/theme";
import Icon from "./Icon";

import ArrowLinkStyled from "./ArrowLink";

import adidasLogo from "../img/adidas_logo.svg";
import fischerLogo from "../img/fischer_logo.svg";
import lenovoLogo from "../img/lenovo_logo.svg";
import logitechLogo from "../img/logitech_logo.svg";
import ubisoftLogo from "../img/ubisoft_logo.svg";
import ubisoftSmallLogo from "../img/ubisoft_small_logo.svg";
import xboxLogo from "../img/xbox_logo.svg";

const ClientsSection = styled.section`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  height: 40vh;

  .container {
    padding-top: 6vh;
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

const CaseStudiesSection = styled.section`
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  height: 70vh;

  .container {
    padding-top: 10vh;
  }
  .col {
    padding: 0 2em;
  }
`;

interface ClientsProps {}

const Clients: React.FC<ClientsProps> = () => {
  return (
    <div>
      <ClientsSection>
        <Grid className="container">
          <h1>Our Clients</h1>
          <Row />
          <Row className="row">
            <Col lg={3} sm={10} className="col">
              <Icon source={xboxLogo} altText="" />
            </Col>
            <span className="vertical" />
            <Col lg={3} sm={10} className="col">
              <Icon source={logitechLogo} altText="" />
            </Col>
            <span className="vertical" />
            <Col lg={3} sm={15} className="col">
              <Icon source={lenovoLogo} altText="" />
            </Col>
            <span className="vertical" />
            <Col lg={3} sm={15} className="col">
              <Icon source={ubisoftLogo} altText="" />
            </Col>
          </Row>
        </Grid>
      </ClientsSection>
      <CaseStudiesSection>
        <Grid className="container">
          <Row>
            <Col lg={4} className="col">
              <Icon source={fischerLogo} altText="" />
              <h2>Skysail gun swing the lead pink Cat o'nine</h2>
              <p>
                Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
                Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
                matey Letter of Marque brig aft bring a spring upon her cable
                grog blossom hang the jib Barbary Coast yard. Barkadeer doubloon
                measured fer yer chains splice the main brace matey no prey, no
                pay dead men tell no tales scuttle clap of thunder crimp.
              </p>
            </Col>
            <Col lg={4} className="col">
              <Icon source={adidasLogo} altText="" />
              <h2>American Main interloper parrel snow quarterdeck</h2>
              <p>
                Shiver me timbers wherry long clothes cog. Interloper blow the
                man down Pirate Round pillage furl grapple wherry long boat
                American Main Davy Jones' Locker. Doubloon lugger brig transom
                jack tack aft aye pirate topmast. Barkadeer doubloon measured
                fer yer chains splice the main brace matey no prey.
              </p>
            </Col>
            <Col lg={4} className="col">
              <Icon source={ubisoftSmallLogo} altText="" />
              <h2>Square-rigged lateen sail flogging </h2>
              <p>
                Deadlights salmagundi Barbary Coast hornswaggle gaff log line
                yawl American Main aft. Weigh anchor cutlass Sea Legs ahoy haul
                wind dance the hempen jig execution dock loaded to the gunwalls
                stern grog. Poop deck pinnace Buccaneer gangplank Sail ho boom
                come about handsomely bounty fluke. Blimey strike colors spanker
                parrel league lad coxswain scallywag topmast draught.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="col">
              <div className="link">
                <ArrowLinkStyled link={""} text="See article" />
              </div>
            </Col>
            <Col lg={4} className="col">
              <div className="link">
                <ArrowLinkStyled link={""} text="See article" />
              </div>
            </Col>
            <Col lg={4} className="col">
              <div className="link">
                <ArrowLinkStyled link={""} text="See article" />
              </div>
            </Col>
          </Row>
        </Grid>
      </CaseStudiesSection>
    </div>
  );
};

export default Clients;
