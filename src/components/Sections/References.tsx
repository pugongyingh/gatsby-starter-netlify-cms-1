import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import swRef from "../../img/ref-1.png";
import designRef from "../../img/ref-2.png";
import ref3 from "../../img/ref-3.png";
import styled from "../../styles/theme";
import Image from "../Image";

interface Props {}

const ReferencesWrap = styled.section`
  @media ${props => props.theme.screen.laptopL} {
    .container {
      max-width: 1050px;
    }
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 170%;
    letter-spacing: 0.03em;
    color: ${props => props.theme.colors.paragraphGrey};
    max-width: 480px;
  }

  .ref-content {
    @media ${props => props.theme.screen.laptop} {
      padding: 2rem 0;

      h2 {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150.5%;
        letter-spacing: 0.03em;
      }

      h3 {
        font-family: Muli;
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        line-height: 143%;
        letter-spacing: 0.03em;
      }
    }
  }
`;

const References: React.FC<Props> = () => {
  return (
    <ReferencesWrap id="references">
      <Grid className="container">
        <h1>References</h1>
        <Row className="section-row">
          <Col xs={12} sm={6} lg={5}>
            <Image source={swRef} altText="Software development reference" />
          </Col>
          <Col className="ref-content" xs={12} sm={6} lgOffset={1} lg={6}>
            <h2>SOFTWARE DEVELOPMENT</h2>
            <h3>Name of the Project</h3>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
        </Row>
        <Row className="section-row flex-row-reverse">
          <Col xs={12} sm={6} lg={5}>
            <Image
              source={designRef}
              altText="Software development reference"
            />
          </Col>
          <Col className="ref-content" xs={12} sm={6} lgOffset={1} lg={6}>
            <h2>SOFTWARE DEVELOPMENT</h2>
            <h3>Name of the Project</h3>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
        </Row>
        <Row className="section-row">
          <Col xs={12} sm={6} lg={5}>
            <Image source={ref3} altText="Software development reference" />
          </Col>
          <Col className="ref-content" xs={12} sm={6} lgOffset={1} lg={6}>
            <h2>SOFTWARE DEVELOPMENT</h2>
            <h3>Name of the Project</h3>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
        </Row>
      </Grid>
    </ReferencesWrap>
  );
};

export default References;
