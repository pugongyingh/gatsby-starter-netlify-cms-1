import * as React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import BlogRollQuery from "../components/Blog/BlogRoll";
import PreviewCompatibleImage from "../components/CMS/PreviewCompatibleImage";
import Contact from "../components/Contact/Contact";
import InstagramRoll from "../components/Instagram/InstagramRoll";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import NewsItem from "../components/NewsItem";
import ReferenceItem from "../components/ReferenceItem";
import TechnologyItem from "../components/TechnologyItem";
import {
  File,
  MarkdownRemarkFrontmatterClients,
  MarkdownRemarkFrontmatterNews,
  MarkdownRemarkFrontmatterReferences,
  MarkdownRemarkFrontmatterTechnologies,
  MarkdownRemarkFrontmatterWork,
  Maybe
} from "../graphql/types";
import WhatwedoBackground from "../img/what-we-do-bg.png";
import styled from "../styles/theme";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
  className?: string;
  clients: Maybe<MarkdownRemarkFrontmatterClients>;
  work: Maybe<MarkdownRemarkFrontmatterWork>;
  technologies: Maybe<MarkdownRemarkFrontmatterTechnologies>;
  news: Maybe<MarkdownRemarkFrontmatterNews>;
  references: Maybe<MarkdownRemarkFrontmatterReferences>;
  locale: Maybe<string>;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading,
  className,
  clients,
  work,
  references,
  news,
  technologies,
  locale
}) => (
  <div className={className}>
    <Navbar locale={locale} />
    <Header title={title} subheading={subheading} hero={hero} locale={locale} />
    {/* Our clients */}
    {clients && (
      <section className="clients">
        <Grid className="container">
          <h1>{locale === "cs" ? "Naši klienti" : "Our clients"}</h1>
          {clients.items && (
            <Row className="clients__wrap">
              {clients.items.map(client => {
                return (
                  <Col
                    key={client!.title}
                    lg={3}
                    sm={6}
                    xs={12}
                    className="clients__item"
                  >
                    {client!.logo && (
                      <PreviewCompatibleImage
                        image={client!.logo}
                        alt={`${client!.title} logo`}
                      />
                    )}
                  </Col>
                );
              })}
            </Row>
          )}
        </Grid>
      </section>
    )}
    {news && (
      <section className="news">
        <Grid className="container">
          <h1>{news.title}</h1>
          {news.items && (
            <Row>
              {news.items.map(newsItem => {
                return (
                  <Col lg={4} xs={12} className="col" key={newsItem!.title}>
                    <h2>{newsItem!.title}</h2>
                    <p>{newsItem!.description}</p>
                  </Col>
                );
              })}
            </Row>
          )}
        </Grid>
      </section>
    )}
    {/* What we do */}
    {work && (
      <section id="what-we-do">
        <Grid className="container">
          <h1>{work.title}</h1>
          <h1>{work.subtitle}</h1>
          <Row className="section-row what-we-do-content-wrap">
            {work.items &&
              work.items.map(workItem => {
                return (
                  <NewsItem
                    key={workItem!.title!}
                    logo={workItem!.logo}
                    heading={workItem!.title!}
                    perex={workItem!.description!}
                    alt={`${workItem!.title} logo`}
                  />
                );
              })}
          </Row>
        </Grid>
      </section>
    )}
    {/* References */}
    {references && (
      <section id="references">
        <Grid className="container">
          <h1>{locale === "cs" ? "Reference" : "References"}</h1>
          {references.items!.map((referenceItem, i) => {
            return (
              <ReferenceItem
                key={referenceItem!.title!}
                image={referenceItem!.image!}
                title={referenceItem!.title!}
                subtitle={referenceItem!.subtitle!}
                description={referenceItem!.description!}
                link=""
                odd={i % 2 !== 0}
              />
            );
          })}
        </Grid>
      </section>
    )}
    {/* Technologies */}
    {technologies && (
      <section className="technologies">
        <Grid className="container">
          <h1>{technologies.title}</h1>
          <Row>
            <Col className="technologies__description" xs={12} md={5}>
              {technologies.description}
            </Col>
            {technologies.items && (
              <Col xs={12} mdOffset={1} md={6}>
                <Row className="logoRow">
                  {technologies.items.map((technology, i) => {
                    return (
                      <TechnologyItem
                        key={i}
                        logo={technology!.logo!}
                        title={technology!.title!}
                      />
                    );
                  })}
                </Row>
              </Col>
            )}
          </Row>
        </Grid>
      </section>
    )}
    {/* Blog */}
    <section id="blog">
      <BlogRollQuery locale={locale} />
    </section>
    {/* Contact Us */}
    <section id="contact">
      <Contact locale={locale} />
    </section>
    {/* Instagram */}
    <section id="instagram">
      <InstagramRoll />
    </section>
    <Footer locale={locale} />
  </div>
);

export const StyledIndexPageTemplate = styled(IndexPageTemplate)`

  /* Main Sections */
  .news {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};

    p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      letter-spacing: 0.03em;
    }

    @media ${props => props.theme.screen.laptopL} {
      h2 {
        margin-bottom: 20px;
        min-height: 70px;
        font-family: Muli;
        font-style: normal;
        font-weight: 800;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.03em;
      }
    }
  }

  #what-we-do {
    color: ${props => props.theme.colors.white};
    background: url(${WhatwedoBackground}) no-repeat center center scroll;
    background-size: cover;

    .what-we-do {
      &-content-wrap {
        justify-content: space-between;
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

      h2 {
        min-height: 70px;
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

        &__wrap {
         margin-top: 60px;
        }
      }



      &__item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;


        @media screen and (max-width: 540px) {
          :not(:last-child) {
            border-bottom: 1px solid ${props =>
              props.theme.colors.clientBorder};
          }
        }

        @media screen and (max-width: 1199px) {
          justify-content: center;
        }

        @media ${props => props.theme.screen.laptop} {
          :not(:first-child):not(:last-child) {
            justify-content: center;
          }
        }
      

        @media ${props => props.theme.screen.laptopL} {
          :not(:last-child) {
            border-right: 1px solid ${props => props.theme.colors.clientBorder};
            border-bottom: none;
          }

          :last-child {
            justify-content: flex-end;
          }
        }

        img {
          width: 100%;
          max-width: 200px;
          height: auto;
          min-height: 200px;

          @media ${props => props.theme.screen.laptop} {
            min-height: initial;
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

    .odd {
      flex-direction: row-reverse;
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

  .technologies {

    &__description {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      line-height: 176.18%;
      color: ${props => props.theme.colors.paragraphGrey};

      @media ${props => props.theme.screen.laptop} {
        font-size: 22px;
      }
    }

    .logoRow {
      align-items: center;
    }
  }

  #instagram {

    @media ${props => props.theme.screen.laptop} {
      padding: 0;
    }
  }

`;
