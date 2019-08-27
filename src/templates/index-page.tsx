import { graphql } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import BlogRoll from "../components/BlogRoll";
import { Preview } from "../components/CMS/Preview";
import Icon from "../components/Icon";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";

import { File, Maybe, Query } from "../graphql/types";

import analysisIcon from "../img/analysis-icon.svg";
import designIcon from "../img/design-icon.svg";
import devIcon from "../img/sw-dev-icon.svg";
import workshopIcon from "../img/workshop-icon.svg";

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
            <Icon source={devIcon} />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={designIcon} />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={analysisIcon} />
            <h2>Heading</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Icon source={workshopIcon} />
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

    {/* Blog */}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
