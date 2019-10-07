import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { File } from "../../graphql/types";
import LinkedInIcon from "../../img/linkedin-icon.svg";
import styled from "../../styles/theme";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";

interface ContactCardProps {
  image: File | string;
  alt: string;
  name: string;
  position: string;
  email: string;
  linkedIn: string;
}

const ContactCardWrap = styled.div`
  margin: 40px 0;

  @media ${props => props.theme.screen.laptop} {
    margin-bottom: 50px;
  }

  h2 {
    font-family: Muli;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 29px;
    color: ${props => props.theme.colors.paragraphGrey};
    margin: 0;
  }

  .contact__description__email {
    text-decoration: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 35px;
    color: ${props => props.theme.colors.paragraphGrey};
  }
  .contact__icon {
    @media ${props => props.theme.screen.mobileS} {
      margin-top: 10px;
    }
    @media ${props => props.theme.screen.laptop} {
      margin-top: 0;
    }
  }
  .contact__icon__link {
    padding: 0;
    margin: 0;
    width: 35px;
    height: 35px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ContactCard: React.FC<ContactCardProps> = ({
  image,
  alt,
  name,
  position,
  email,
  linkedIn
}) => {
  return (
    <ContactCardWrap>
      <Row>
        <Col className="contact__image" xs={12} sm={3}>
          <PreviewCompatibleImage
            className="contact__image-wrap"
            image={image}
            alt={alt}
          />
        </Col>
        <Col className="contact__content" xs={12} sm={9}>
          <div className="contact__description">
            <h2>{name}</h2>
            <h2>{position}</h2>
            <a
              className="contact__description__email"
              href={`mailto:${email}`}
              target="_top"
            >
              {email}
            </a>
          </div>
          <div className="contact__icon">
            <a className="contact__icon__link" href={linkedIn} target="_blank">
              <PreviewCompatibleImage
                className="linkedin-icon"
                image={LinkedInIcon}
                alt="LinkedIn icon"
                height="35px"
                width="35px"
              />
            </a>
          </div>
        </Col>
      </Row>
    </ContactCardWrap>
  );
};

export default ContactCard;
