import { graphql } from "gatsby";
import React from "react";
import {
  MarkdownRemarkFrontmatterMainImage1,
  MarkdownRemarkFrontmatterMainImage2,
  MarkdownRemarkFrontmatterMainImage3,
  Query,
  SitePageContext
} from "../@types/graphql";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export type MarkdownRemarkFrontmatterMainImage =
  | MarkdownRemarkFrontmatterMainImage1
  | MarkdownRemarkFrontmatterMainImage2
  | MarkdownRemarkFrontmatterMainImage3;

export interface ProductPageInterface {
  data: Query,
  pageContext: SitePageContext
}

export const ProductPage: React.SFC<ProductPageInterface> = ({ data }) => {
  const {
    image,
    title,
    heading,
    description,
    intro,
    main,
    testimonials,
    full_image,
    pricing
  } = data.markdownRemark.frontmatter;

  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image!.childImageSharp ? image!.childImageSharp!.fluid!.src : image
            })`
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem"
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro!.blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main!.heading}
                    </h3>
                    <p>{main!.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      full_image!.childImageSharp
                        ? full_image!.childImageSharp!.fluid!.src
                        : full_image
                      })`
                  }}
                />
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing!.heading}
                </h2>
                <p className="is-size-5">{pricing!.description}</p>
                <Pricing data={pricing!.plans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;