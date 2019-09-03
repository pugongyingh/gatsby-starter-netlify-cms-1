import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled from "../../styles/theme";
import ContactCard from "../ContactCard";
import Form from "../Form";
import Image from "../Image";

import Map from "../../img/address-map.png";
import ContactImg1 from "../../img/michal-kourik-photo.png";

interface ContactProps {}

const ContactUs = styled.section`
  .contact-wrap {
    @media ${props => props.theme.screen.laptop} {
      margin-top: 6rem;
    }
  }
`;

const Contact: React.FC<ContactProps> = () => {
  return (
    <ContactUs id="contact">
      <Grid>
        <h1>Contact us</h1>
        <Row className="contact-wrap">
          <Col xs={12} sm={6}>
            <Form />
          </Col>
          <Col xs={12} sm={6}>
            <Grid>
              <Row>
                <Col xs={12}>
                  <ContactCard
                    ImgSource={ContactImg1}
                    altText="A contact photo"
                    name="Michal Kouřík"
                    position="Technological teamleader"
                    email="michal.kourik@starkysclub.com"
                  />
                </Col>
                <Col xs={12}>
                  <ContactCard
                    ImgSource={ContactImg1}
                    altText="A contact photo"
                    name="Michal Kouřík"
                    position="Technological teamleader"
                    email="michal.kourik@starkysclub.com"
                  />
                </Col>
                <Col xs={12}>
                  <ContactCard
                    ImgSource={ContactImg1}
                    altText="A contact photo"
                    name="Michal Kouřík"
                    position="Technological teamleader"
                    email="michal.kourik@starkysclub.com"
                  />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
      <Grid fluid={true}>
        <a href="https://goo.gl/maps/1rP52P6eimCVF58y9" target="_blank">
          <Image altText="Address map" source={Map} />
        </a>
      </Grid>
    </ContactUs>
  );
};

export default Contact;
