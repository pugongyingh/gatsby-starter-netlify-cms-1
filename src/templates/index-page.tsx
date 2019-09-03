import { graphql } from "gatsby";
import React from "react";
import { Preview } from "../components/CMS/Preview";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import Blog from "../components/Sections/Blog";
import CaseStudies from "../components/Sections/CaseStudies";
import Clients from "../components/Sections/Clients";
import References from "../components/Sections/References";
import Technologies from "../components/Sections/Technologies";
import WhatWeDo from "../components/Sections/WhatWeDo";

import { File, Maybe, Query } from "../graphql/types";

// sections
import Contact from "../components/Sections/Contact";
import Instagram from "../components/Sections/Intagram";

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
    <Clients />
    <CaseStudies />
    {/* What we do */}
    <WhatWeDo />
    {/* References */}
    <References />
    {/* Technologies */}
    <Technologies />
    {/* Blog */}
    <Blog />
    {/* Contact Us */}
    <Contact />
    {/* Instagram */}
    <Instagram />
  </div>
);

const StyledIndexPageTemplate = styled(IndexPageTemplate)`
  .container {
    @media ${props => props.theme.screen.laptop} {
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
        clients {
          logo {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
