import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import analysisIcon from "../../img/analysis-icon.svg";
import designIcon from "../../img/design-icon.svg";
import devIcon from "../../img/sw-dev-icon.svg";
import workshopIcon from "../../img/workshop-icon.svg";
import styled from "../../styles/theme";
import Icon from "../Icon";

interface Props {}

const WhatWeDoWrap = styled.section`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.darkGreen};
  padding: 2rem 0;

  @media ${props => props.theme.screen.laptop} {
    padding: 7.5rem 0;
  }

  .row {
    @media ${props => props.theme.screen.laptop} {
      margin-top: 95px;
    }
  }

  h1 {
    &:nth-child(2) {
      font-size: 3.5rem;
      font-weight: bold;
      max-width: 50%;
    }
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0.03em;
  }
`;

const WhatWeDo: React.FC<Props> = () => {
  return (
    <WhatWeDoWrap id="what-we-do">
      <Grid className="container">
        <h1>What we do</h1>
        <h1>Driving brands forward online.</h1>
        <Row className="section-row">
          <Col xs={12} sm={6} lg={3}>
            <Icon
              source={devIcon}
              altText="WWD Icons"
              height="90px"
              width="90px"
            />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon
              source={designIcon}
              altText="WWD Icons"
              height="90px"
              width="90px"
            />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon
              source={analysisIcon}
              altText="WWD Icons"
              height="90px"
              width="90px"
            />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon
              source={workshopIcon}
              altText="WWD Icons"
              height="90px"
              width="90px"
            />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
        </Row>
      </Grid>
    </WhatWeDoWrap>
  );
};

export default WhatWeDo;
