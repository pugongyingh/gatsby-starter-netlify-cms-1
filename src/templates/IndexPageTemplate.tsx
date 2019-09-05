import * as React from "react";
import Header from "../components/Layout/Header";
import StyledBlog from "../components/Sections/Blog";
import CaseStudies from "../components/Sections/CaseStudies";
import Clients from "../components/Sections/Clients";
import Contact from "../components/Sections/Contact";
import StyledInstagram from "../components/Sections/Instagram";
import References from "../components/Sections/References";
import Technologies from "../components/Sections/Technologies";
import WhatWeDo from "../components/Sections/WhatWeDo";
import { File, MarkdownRemarkFrontmatterClients, Maybe } from "../graphql/types";
import styled from "../styles/theme";

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
      {/* Our clients */}
      <Clients clients={clients} />
      <CaseStudies />
      {/* What we do */}
      <WhatWeDo />
      {/* References */}
      <References />
      {/* Technologies */}
      <Technologies />
      {/* Blog */}
      <StyledBlog />
      {/* Contact Us */}
      <Contact />
      {/* Instagram */}
      <StyledInstagram />
    </div>
  );

export const StyledIndexPageTemplate = styled(IndexPageTemplate)`
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