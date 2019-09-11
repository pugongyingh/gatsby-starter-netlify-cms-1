import * as React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import BlogRollQuery from "../components/Blog/BlogRoll";
import PreviewCompatibleImage from "../components/CMS/PreviewCompatibleImage";

import ContactCard from "../components/Contact/ContactCard";
import StyledContactForm from "../components/Contact/Form";

import Image from "../components/Image";
import InstagramRoll from "../components/Instagram/InstagramRoll";
import Header from "../components/Layout/Header";

import NewsItem from "../components/NewsItem";
import ReferenceItem from "../components/ReferenceItem";
import TechnologyItem from "../components/TechnologyItem";

import {
  File,
  MarkdownRemarkFrontmatterClients,
  MarkdownRemarkFrontmatterReferences,
  MarkdownRemarkFrontmatterTechnologies,
  MarkdownRemarkFrontmatterWork,
  Maybe
} from "../graphql/types";
import map from "../img/address-map.png";

import ContactImg2 from "../img/martin-svach-photo.png";
import ContactImg1 from "../img/michal-kourik-photo.png";
import ContactImg3 from "../img/vaclav.jpg";
import styled from "../styles/theme";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
  className?: string;
  clients: Maybe<Array<Maybe<MarkdownRemarkFrontmatterClients>>>;
  news: Maybe<Scalars["String"]>;
  work: Maybe<MarkdownRemarkFrontmatterWork>;
  technologies: Maybe<MarkdownRemarkFrontmatterTechnologies>;
  references: Maybe<Array<Maybe<MarkdownRemarkFrontmatterReferences>>>;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading,
  className,
  clients,
  news,
  work,
  technologies,
  references // TODO: Use
}) => (
  <div className={className}>
    <Header title={title} subheading={subheading} hero={hero} />
    {/* Our clients */}
    <section className="clients">
      <Grid className="container">
        <h1>Our Clients</h1>
        <Row className="row">
          {clients &&
            clients.map(client => {
              if (!client) {
                return null;
              }
              return (
                <Col key={client.title} md={3} xs={12} className="col">
                  {client.logo && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: client.logo,
                        alt: `${client.title} logo`
                      }}
                    />
                  )}
                </Col>
              );
            })}
        </Row>
      </Grid>
    </section>
    {/* News */}
    <section className="news">
      <Grid className="container">
        <h1>News</h1>
        <Row>
          <Col md={4} xs={12} className="col">
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice the main brace matey no prey, no
              pay dead men tell no tales scuttle clap of thunder crimp.
            </p>
          </Col>
          <Col md={4} xs={12} className="col">
            <h2>American Main interloper parrel snow quarterdeck</h2>
            <p>
              Shiver me timbers wherry long clothes cog. Interloper blow the man
              down Pirate Round pillage furl grapple wherry long boat American
              Main Davy Jones' Locker. Doubloon lugger brig transom jack tack
              aft aye pirate topmast. Barkadeer doubloon measured fer yer chains
              splice the main brace matey no prey.
            </p>
          </Col>
          <Col md={4} xs={12} className="col">
            <h2>Square-rigged lateen sail flogging </h2>
            <p>
              Deadlights salmagundi Barbary Coast hornswaggle gaff log line yawl
              American Main aft. Weigh anchor cutlass Sea Legs ahoy haul wind
              dance the hempen jig execution dock loaded to the gunwalls stern
              grog. Poop deck pinnace Buccaneer gangplank Sail ho boom come
              about handsomely bounty fluke. Blimey strike colors spanker parrel
              league lad coxswain scallywag topmast draught.
            </p>
          </Col>
        </Row>
      </Grid>
    </section>
    {/* What we do */}
    <section id="what-we-do">
      <Grid className="container">
        <h1>What we do</h1>
        <h1>Driving brands forward online.</h1>
        <Row className="section-row what-we-do-content-wrap">
          {/* <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
            <Icon
              className=""
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
            <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
              <Icon
                className=""
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
            <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
              <Icon
                className=""
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
            <Col className="what-we-do-card" xs={12} sm={6} lg={3}>
              <Icon
                className=""
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
          </Col> */}

          {work &&
            work.services.map(workitem => {
              if (!workitem) {
                return null;
              }
              return (
                <NewsItem
                  key={workitem.title}
                  wwdIcon={workitem.logo}
                  heading={workitem.title}
                  perex={workitem.description}
                  alt={`${workitem.title} logo`}
                />
              );
            })}
        </Row>
      </Grid>
    </section>
    {/* References */}
    <section id="references">
      <Grid className="container">
        <h1>References</h1>
        {/* <Row className="section-row">
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
            <Col xs={12} sm={6} lg={5} lgOffset={1}>
              <Image
                source={designRef}
                altText="Software development reference"
              />
            </Col>
            <Col className="ref-content text-align-right" xs={12} sm={6} lg={6}>
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
        </Row> */}

        {references &&
          references.map(referenceItem => {
            if (!referenceItem) {
              return null;
            }
            return (
              <ReferenceItem
                key={referenceItem.title}
                src={referenceItem.image}
                alt={`${referenceItem.title} image`}
                heading={referenceItem.title}
                subheading={referenceItem.subtitle}
                perex={referenceItem.description}
              />
            );
          })}
      </Grid>
    </section>
    {/* Technologies */}
    <section className="technologies">
      <Grid className="container">
        <h1>{technologies.title}</h1>
        <Row>
          <Col xs={12} sm={6}>
            {technologies.description}
          </Col>
          <Col xs={12} smOffset={1} sm={4}>
            <Row className="logoRow">
              {/* <Col xs={4}>
                <Logo source={javaLogo} altText="A Java Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={reactLogo} altText="A React Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={awsLogo} altText="An Aws Logo" />
              </Col> */}

              {technologies &&
                technologies.logos.map(logo => {
                  if (!logo) {
                    return null;
                  }
                  return (
                    <TechnologyItem
                      key={technologies.title}
                      src={technologies.logos}
                      alt={`${technologies.title} logo`}
                    />
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Grid>
    </section>
    <BlogRollQuery />
    {/* Contact Us */}
    <section id="contact" className="contact">
      <Grid className="container">
        <h1>Contact us</h1>
        <Row className="contact__wrap">
          <Col xs={12} md={5} lg={6}>
            <StyledContactForm />
          </Col>
          <Col xs={12} md={7} lg={6}>
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
                  ImgSource={ContactImg2}
                  altText="A contact photo"
                  name="Martin Švach"
                  position="Business development"
                  email="martin.svach@starkysclub.com"
                />
              </Col>
              <Col xs={12}>
                <ContactCard
                  ImgSource={ContactImg3}
                  altText="A contact photo"
                  name="Václav Brzezina"
                  position="Frontend teamleader"
                  email="vaclav.brzezina@starkysclub.com"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </section>
    <section>
      <a href="https://goo.gl/maps/1rP52P6eimCVF58y9" target="_blank">
        <Image altText="Address map" source={map} />
      </a>
    </section>
    {/* Instagram */}
    <InstagramRoll />
  </div>
);

export const StyledIndexPageTemplate = styled(IndexPageTemplate)`
  .container {
    @media ${props => props.theme.screen.laptopL} {
      width: 1410px !important;
    }
  }

  h1 {
    @media ${props => props.theme.screen.laptop} {
      text-align: left;
    }
  }

  section {
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .section-row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }
  }

  /* Main Sections */
  .news {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
  }

  #what-we-do {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen};

    .what-we-do {
      &-content-wrap {
        justify-content: space-between;
      }

      &-card {
        max-width: 330px;
      }
    }

    @media ${props => props.theme.screen.laptop} {
      h1 {
        &:nth-child(2) {
          font-size: 3.5rem;
          font-weight: bold;
          max-width: 50%;
        }
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
  }

  .clients {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};
    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .container {
      .row {
        padding-top: 4vh;
      }
      .col {
        display: flex;
        justify-content: center;
        margin: -1px;

        @media ${props => props.theme.screen.laptop} {
          :not(:last-child) {
            border-right: 1px solid ${props => props.theme.colors.clientBorder};
          }
        }
      }
    }
  }

  #references {
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
        max-width: 480px;

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

      @media ${props => props.theme.screen.mobileL} {
        display: inline-block;
      }

      &-wrap {
        width: 100px;
        height: 100px;
        border-radius: 100px;
      }
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

  .map {
    position: relative;
    height: 530px;
    width: 100%;

    &__image {
      background-image: url(${map});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
    }
  }
`;
