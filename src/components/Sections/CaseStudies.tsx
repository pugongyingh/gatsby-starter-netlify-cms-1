import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";
import Icon from "../Icon";

import ArrowLinkStyled from "../ArrowLink";

import adidasLogo from "../../img/adidas_logo.svg";
import fischerLogo from "../../img/fischer_logo.svg";
import ubisoftSmallLogo from "../../img/ubisoft_small_logo.svg";

const CaseStudiesSection = styled.section`
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  display: flex;
  @media ${props => props.theme.screen.laptop} {
    padding: 7.5rem 0;
  }

  .col {
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    p {
      flex-grow: 1;
    }
  }
`;

interface CaseStudiesProps {}

const CaseStudies: React.FC<CaseStudiesProps> = () => {
  return (
    <CaseStudiesSection>
      <Grid className="container">
        <Row>
          <Col lg={4} xs={12} className="col">
            <Icon source={fischerLogo} altText="" width="151px" height="21px" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice the main brace matey no prey, no
              pay dead men tell no tales scuttle clap of thunder crimp.
            </p>

            <ArrowLinkStyled link={""} text="See article" />
          </Col>
          <Col lg={4} xs={12} className="col">
            <Icon
              source={adidasLogo}
              altText="Adidas logo"
              width="77px"
              height="52px"
            />
            <h2>American Main interloper parrel snow quarterdeck</h2>
            <p>
              Shiver me timbers wherry long clothes cog. Interloper blow the man
              down Pirate Round pillage furl grapple wherry long boat American
              Main Davy Jones' Locker. Doubloon lugger brig transom jack tack
              aft aye pirate topmast. Barkadeer doubloon measured fer yer chains
              splice the main brace matey no prey.
            </p>

            <ArrowLinkStyled link={""} text="See article" />
          </Col>
          <Col lg={4} xs={12} className="col">
            <Icon
              source={ubisoftSmallLogo}
              altText="Ubisoft logo"
              width="57px"
              height="52px"
            />
            <h2>Square-rigged lateen sail flogging </h2>
            <p>
              Deadlights salmagundi Barbary Coast hornswaggle gaff log line yawl
              American Main aft. Weigh anchor cutlass Sea Legs ahoy haul wind
              dance the hempen jig execution dock loaded to the gunwalls stern
              grog. Poop deck pinnace Buccaneer gangplank Sail ho boom come
              about handsomely bounty fluke. Blimey strike colors spanker parrel
              league lad coxswain scallywag topmast draught.
            </p>

            <ArrowLinkStyled link={""} text="See article" />
          </Col>
        </Row>
      </Grid>
    </CaseStudiesSection>
  );
};
export default CaseStudies;
