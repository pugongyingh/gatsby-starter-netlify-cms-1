import { Link } from "gatsby";
import React from "react";
import BlogRoll from "../components/BlogRoll";
import Features from "../components/Features";
import Header from "../components/Header/Header";

interface IndexPageTemplateProps {
  heading: any;
  subheading: any;
  mainpitch: any;
  description: any;
  intro: any;
}

export const IndexPageTemplate: React.SFC<IndexPageTemplateProps> = ({
  heading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <Header
      title="test"
      subheading="testsub"
      video="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
    />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div
                    id="my-cool-header"
                    className="column is-12 has-text-centered"
                  >
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPageTemplate;
