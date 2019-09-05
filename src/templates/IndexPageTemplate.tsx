import * as React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import ArrowLinkStyled from "../components/ArrowLink";
import PreviewCompatibleImage from "../components/CMS/PreviewCompatibleImage";
import ContactCard from "../components/ContactCard";
import Form from "../components/Form";
import Icon from "../components/Icon";
import Image from "../components/Image";
import Header from "../components/Layout/Header";
import Logo from "../components/Logo";

import ContactImg1 from "../../img/michal-kourik-photo.png";
import Map from "../img/address-map.png";

// Sections
import StyledBlog from "../components/Sections/Blog";
import StyledInstagram from "../components/Sections/Instagram";

import {
  File,
  MarkdownRemarkFrontmatterClients,
  Maybe
} from "../graphql/types";
import styled from "../styles/theme";

// Icons
import adidasLogo from "../img/adidas_logo.svg";
import awsLogo from "../img/aws-logo.svg";
import dockerLogo from "../img/docker-logo.svg";
import fischerLogo from "../img/fischer_logo.svg";
import javaLogo from "../img/java-logo.svg";
import polymerLogo from "../img/polymer-logo.svg";
import reactLogo from "../img/react-logo.svg";
import swRef from "../img/ref-1.png";
import designRef from "../img/ref-2.png";
import ref3 from "../img/ref-3.png";
import swiftLogo from "../img/swift-logo.svg";
import ubisoftSmallLogo from "../img/ubisoft_small_logo.svg";

import analysisIcon from "../img/analysis-icon.svg";
import designIcon from "../img/design-icon.svg";
import devIcon from "../img/sw-dev-icon.svg";
import workshopIcon from "../img/workshop-icon.svg";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
  className?: string;
  clients: Maybe<Array<Maybe<MarkdownRemarkFrontmatterClients>>>;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading,
  className,
  clients
}) => (
  <div className={className}>
    <Header title={title} subheading={subheading} hero={hero} />
    {/* Case studies */}
    <section>
      <Grid className="container">
        <Row>
          <Col lg={4} xs={12} className="col">
            <Icon
              className=""
              source={fischerLogo}
              altText=""
              width="151px"
              height="52px"
            />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice the main brace matey no prey, no
              pay dead men tell no tales scuttle clap of thunder crimp.
            </p>

            <ArrowLinkStyled
              instaFollowLink={false}
              link={""}
              text="See article"
            />
          </Col>
          <Col lg={4} xs={12} className="col">
            <Icon
              className=""
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

            <ArrowLinkStyled
              instaFollowLink={false}
              link={""}
              text="See article"
            />
          </Col>
          <Col lg={4} xs={12} className="col">
            <Icon
              className=""
              source={ubisoftSmallLogo}
              altText="Ubisoft logo"
              width="77px"
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

            <ArrowLinkStyled
              instaFollowLink={false}
              link={""}
              text="See article"
            />
          </Col>
        </Row>
      </Grid>
    </section>
    {/* What we do */}
    <section id="what-we-do">
      <Grid className="container">
        <h1>What we do</h1>
        <h1>Driving brands forward online.</h1>
        <Row className="section-row">
          <Col xs={12} sm={6} lg={3}>
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
          <Col xs={12} sm={6} lg={3}>
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
          <Col xs={12} sm={6} lg={3}>
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
          <Col xs={12} sm={6} lg={3}>
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
          </Col>
        </Row>
      </Grid>
    </section>
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
                <Col key={client.title} lg={3} xs={12} className="col">
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
    {/* References */}
    <section id="references">
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
    </section>
    {/* Technologies */}
    <section className="technologies">
      <Grid className="container">
        <h1>Technologies</h1>
        <Row>
          <Col xs={12} sm={6}>
            <p>
              Skip it dawg pulp fiction chia pet. Napster khaki dolly the sheep
              beanie babies david duchovny lisa frank. Nerf guns hoop earrings.
            </p>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin.
            </p>
          </Col>
          <Col xs={12} smOffset={1} sm={4}>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={javaLogo} altText="A Java Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={reactLogo} altText="A React Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={awsLogo} altText="An Aws Logo" />
              </Col>
            </Row>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={polymerLogo} altText="A Polymer Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={swiftLogo} altText="A Swift Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={dockerLogo} altText="A Docker Logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </section>
    {/* Blog */}
    <StyledBlog />
    {/* Contact Us */}
    <section id="contact">
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
    </section>
    {/* Instagram */}
    <StyledInstagram />
  </div>
);

export const StyledIndexPageTemplate = styled(IndexPageTemplate)`
  .container {
    @media ${props => props.theme.screen.laptopL} {
      width: 1410px !important;
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

  #what-we-do {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen};

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
  }

  .clients {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};
    /*height: 40vh;*/
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
`;
