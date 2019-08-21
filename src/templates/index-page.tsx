import { graphql, Link } from "gatsby";
import React from "react";
import { ImageSharp, Query } from "../@types/graphql";
import BlogRoll from "../components/BlogRoll";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";

interface IndexPageProps {
  image: string | ImageSharp;
  title: string;
  heading: string;
  subheading: string;
}

const isImageType = (obj: string | ImageSharp): obj is ImageSharp => {
  return obj.hasOwnProperty("childImageSharp");
};

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  image,
  title,
  subheading
}) => (
  <div>
    <Header
      title={title}
      subheading={subheading}
      video="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
    />
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
  </div>
);

interface IndexPageTemplateProps {
  data: Query;
}

const IndexPage = ({ data }: IndexPageTemplateProps) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image.childImageSharp}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

export const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
      />
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;

export default IndexPage;
