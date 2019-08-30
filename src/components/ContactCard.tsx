import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import Icon from "../components/Icon";
import Image from "../components/Image";
import styled from "../styles/theme";

import LinkedInIcon from "../img/linkedin-icon.svg";

interface ContactCardProps {
  ImgSource: string;
  altText: string;
  name: string;
  email: string;
}

const ContactCardWrap = styled(Grid)`
  margin-bottom: 40px;
  @media ${props => props.theme.screen.laptop} {
    margin-bottom: 100px;
  }

  h2 {
    font-family: Muli;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 29px;
    color: ${props => props.theme.colors.paragraphGrey};
  }

  a {
    text-decoration: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 35px;
    color: ${props => props.theme.colors.paragraphGrey};
  }

  img {
    margin-left: 40px;
  }
`;

const ContactCard: React.FC<ContactCardProps> = ({
  ImgSource,
  altText,
  name,
  email
}) => {
  return (
    <ContactCardWrap>
      <Row>
        <Col xs={12} sm={3}>
          <Image source={ImgSource} altText={altText} />
        </Col>
        <Col xs={12} sm={9}>
          <h2>{name}</h2>
          <a href={`mailto:${email}`} target="_top">
            {email}
          </a>
          <Icon
            source={LinkedInIcon}
            altText="LinkedIn icon"
            height="35px"
            width="35px"
          />
        </Col>
      </Row>
    </ContactCardWrap>
  );
};

export default ContactCard;
