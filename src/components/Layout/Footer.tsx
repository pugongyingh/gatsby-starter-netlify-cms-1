import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";
import Icon from "../Icon";
import SocialIcon from "../SocialIcon";

// icons
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import linkedin from "../../img/social/linkedin.svg";
import twitter from "../../img/social/twitter.svg";
import starkysIcon from "../../img/starkys-logo.svg";

const StyledFooter = styled.section`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  @media ${props => props.theme.screen.laptop} {
    padding: 2rem 0;
  }
  display: flex;
  .copyright {
    display: flex;
    align-items: center;
    width: 270px;

    @media ${props => props.theme.screen.laptop} {
      width: 100%;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .container {
    @media ${props => props.theme.screen.laptop} {
      width: 1410px !important;
    }
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <Grid className="container">
        <Row>
          <Col lg={4}>
            <Icon
              source={starkysIcon}
              altText="Starky's Club"
              height=""
              width=""
            />
          </Col>
          <Col lg={4} className="copyright">
            Copyright © StarkysClub 2019. All rights reserved.
          </Col>
          <Col lg={4} className="social">
            <a href="https://www.facebook.com" title="Facebook">
              <SocialIcon source={facebook} altText="Facebook" />
            </a>
            <a href="https://www.twitter.com" title="Twitter">
              <SocialIcon source={twitter} altText="Twitter" />
            </a>
            <a href="https://www.instagram.com" title="Instagram">
              <SocialIcon source={instagram} altText="Instagram" />
            </a>
            <a href="https://www.linkedin.com" title="LinkedIn">
              <SocialIcon source={linkedin} altText="LinkedIn" />
            </a>
          </Col>
        </Row>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
