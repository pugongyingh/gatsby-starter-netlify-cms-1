import { graphql } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import ArrowButton from "../components/ArrowButton";
import Clients from "../components/Clients";
import { Preview } from "../components/CMS/Preview";
import Icon from "../components/Icon";
import Image from "../components/Image";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import Logo from "../components/Logo";
import CaseStudies from "../components/Sections/CaseStudies";

import { File, Maybe, Query } from "../graphql/types";

// icons and logos
import analysisIcon from "../img/analysis-icon.svg";
import awsLogo from "../img/aws-logo.svg";
import blogImgOne from "../img/blog-1.png";
import designIcon from "../img/design-icon.svg";
import dockerLogo from "../img/docker-logo.svg";
import javaLogo from "../img/java-logo.svg";
import polymerLogo from "../img/polymer-logo.svg";
import reactLogo from "../img/react-logo.svg";
import swRef from "../img/ref-1.png";
import designRef from "../img/ref-2.png";
import ref3 from "../img/ref-3.png";
import arrowIcon from "../img/right-arrow-icon.svg";
import devIcon from "../img/sw-dev-icon.svg";
import swiftLogo from "../img/swift-logo.svg";
import workshopIcon from "../img/workshop-icon.svg";

// sections
import Contact from "../components/Sections/Contact";
import styled from "../styles/theme";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
  className?: string;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading,
  className
}) => (
  <div className={className}>
    <Header title={title} subheading={subheading} hero={hero} />
    {/* Our clients */}
    <CaseStudies />
    {/* What we do */}
    <section className="what-we-do">
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
    </section>
    {/* References */}
    <section className="references">
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
    <section className="blog">
      <Grid className="container">
        <h1>Blog</h1>
        <Row className="blog-wrap">
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
        </Row>
        <Row className="arrow-icons-wrap">
          <ArrowButton
            leftArrow={true}
            source={arrowIcon}
            altText="An arrow icon"
          />
          <ArrowButton
            leftArrow={false}
            source={arrowIcon}
            altText="An arrow icon"
          />
        </Row>
      </Grid>
      {/* <BlogRoll /> */}
    </section>
    {/* Contact Us */}
    <Contact />
  </div>
);

const StyledIndexPageTemplate = styled(IndexPageTemplate)`
  .container {
    @media ${props => props.theme.screen.laptop} {
      width: 1410px !important;
    }
  }

  /*All Main Sections*/
  .what-we-do {
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
  }

  .references {
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }
    /* .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    } */

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

  .technologies {
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }

    p {
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 176.18%;
      color: ${props => props.theme.colors.paragraphGrey};
    }

    .logoRow {
      display: flex;
      justify-content: center;
      align-items: center;

      @media ${props => props.theme.screen.laptop} {
        &:nth-child(1) {
          margin-bottom: 70px;
        }
      }
    }
  }

  .blog {
    background-color: ${props => props.theme.colors.blogSectionBg};
    color: ${props => props.theme.colors.white};
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }

    .blog-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media ${props => props.theme.screen.laptop} {
        margin-top: 100px;

        .blog-item {
          max-width: 420px;

          h2 {
            margin-top: 70px;
          }
        }
      }
    }

    .arrow-icons-wrap {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

interface IndexPageTemplateProps {
  data: Query;
}

const IndexPage = ({ data }: IndexPageTemplateProps) => {
  const { markdownRemark: page } = data;

  if (!page || !page.frontmatter) {
    throw new Error("Data loading error");
  }

  return (
    <Page>
      <StyledIndexPageTemplate
        hero={page.frontmatter.hero!}
        title={page.frontmatter.title!}
        subheading={page.frontmatter.subheading}
      />
    </Page>
  );
};

export const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <Preview>
        <StyledIndexPageTemplate
          hero={data.hero}
          title={data.title}
          subheading={data.subheading}
        />
      </Preview>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        hero {
          ...FileInfo
        }
      }
    }
  }
`;

export default IndexPage;
