import { graphql } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import BlogRoll from "../components/BlogRoll";
import { Preview } from "../components/CMS/Preview";
import Icon from "../components/Icon";
import Image from "../components/Image";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import Logo from "../components/Logo";

import { File, Maybe, Query } from "../graphql/types";

import analysisIcon from "../img/analysis-icon.svg";
import designIcon from "../img/design-icon.svg";
import devIcon from "../img/sw-dev-icon.svg";
import workshopIcon from "../img/workshop-icon.svg";

import swRef from "../img/ref-1.png";
import designRef from "../img/ref-2.png";
import ref3 from "../img/ref-3.png";

import awsLogo from "../img/aws-logo.svg";
import dockerLogo from "../img/docker-logo.svg";
import javaLogo from "../img/java-logo.svg";
import polymerLogo from "../img/polymer-logo.svg";
import reactLogo from "../img/react-logo.svg";
import swiftLogo from "../img/swift-logo.svg";

import blogImgOne from "../img/blog-1.png";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading
}) => (
  <>
    <Header title={title} subheading={subheading} hero={hero} />
    {/* Our clients */}

    {/* What we do */}
    <section className="what-we-do">
      <Grid className="container">
        <h1>What we do</h1>
        <h1>Driving brands forward online.</h1>
        <Row className="row">
          <Col xs={12} sm={6} lg={3}>
            <Icon source={devIcon} altText="WWD Icons" />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={designIcon} altText="WWD Icons" />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={analysisIcon} altText="WWD Icons" />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={workshopIcon} altText="WWD Icons" />
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
        <Row className="row">
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
        <Row className="row reverse">
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
        <Row className="row">
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
      </Grid>
      {/* <BlogRoll /> */}
    </section>

    {/* Contact us */}

    {/* Instagram */}
  </>
);

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
      <IndexPageTemplate
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
        <IndexPageTemplate
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
