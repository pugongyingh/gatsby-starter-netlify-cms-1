import { graphql, StaticQuery } from "gatsby";
import GoogleMap, { MapOptions, Maps } from "google-map-react";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { MarkdownRemarkEdge, Maybe, Query } from "../../graphql/types";
import styled, { SCP } from "../../styles/theme";
import ContactCard from "./ContactCard";
import StyledContactForm from "./Form";
import MapTooltip from "./MapTooltip";

// TODO: TYPECHECK!!!!!!

interface P extends SCP {
  configs: MarkdownRemarkEdge[];
  locale: Maybe<string>;
}

const createMapOptions = (maps: Maps): MapOptions => {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      },
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      }
    ],
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    draggable: false
  };
};

const ContactTemplate: React.FC<P> = ({ className, configs, locale }) => {
  const currentConfig = configs.find(
    config => config.node.frontmatter!.locale === locale
  );
  if (!currentConfig) {
    return null;
  }

  const contact = currentConfig.node.frontmatter!.contact!;
  const lat = parseFloat(contact.address!.lat!);
  const lng = parseFloat(contact.address!.lng!);

  return (
    <div className={className}>
      <Grid className="container contact">
        <h1>{locale === "cs" ? "Kontakt" : "Contact"}</h1>
        <Row className="">
          <Col xs={12} sm={4} md={5}>
            <StyledContactForm locale={locale} />
          </Col>
          {contact.contactPerson && (
            <Col xs={12} sm={8} md={6} mdOffset={1}>
              <Row>
                {contact.contactPerson.map(person => (
                  <Col xs={12} key={person!.name}>
                    <ContactCard
                      image={person!.image!}
                      alt={person!.name!}
                      name={person!.name!}
                      position={person!.role!}
                      email={person!.email!}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Row>
      </Grid>
      <div className="map-wrap">
        <GoogleMap
          zoom={17}
          center={{ lat, lng }}
          bootstrapURLKeys={{
            key: "AIzaSyAGGuCtlm7jP7mnSvo5uJaKCZN--_GwNX4",
            language: "cs"
          }}
          options={createMapOptions}
        >
          <MapTooltip lat={lat} lng={lng} address={contact.address!} />
        </GoogleMap>
      </div>
    </div>
  );
};

const StyledContact = styled(ContactTemplate)`
  .map-wrap {
    height: 530px;
    margin-top: 4rem;

    @media ${props => props.theme.screen.laptop} {
      margin-top: 15rem;
    }
  }

  .contact {
    &__wrap {
      flex-direction: column-reverse;

      @media ${props => props.theme.screen.laptop} {
        flex-direction: row;
      }
    }

    &__image {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;

      &-wrap {
        width: 150px;
        height: 150px;
        border-radius: 100px !important;

        @media ${props => props.theme.screen.tablet} {
          width: 100px;
          height: 100px;
        }
      }
    }

    &__content {
      flex-direction: column;
      display: flex;

      @media ${props => props.theme.screen.mobileL} {
        flex-direction: row;
      }
    }

    .contact__description {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      @media ${props => props.theme.screen.mobileL} {
        justify-content: flex-start;
        flex-basis: 280px;
        align-items: flex-start;
      }
    }

    .contact__icon {
      justify-content: center;
      display: flex;
      align-items: center;
      flex-basis: 20%;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;

      @media ${props => props.theme.screen.mobileL} {
        display: inline-block;
        text-align: left;
      }
    }
  }
`;

const Contact: React.SFC<Omit<P, "configs">> = props => {
  return (
    <StaticQuery
      query={graphql`
        query ContactQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/static/config//" } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  locale
                  contact {
                    ...ContactInfo
                  }
                }
              }
            }
          }
        }
      `}
      render={(data: Query) => (
        <StyledContact configs={data.allMarkdownRemark.edges} {...props} />
      )}
    />
  );
};

export default Contact;
