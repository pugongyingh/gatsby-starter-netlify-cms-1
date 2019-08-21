import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Query } from "../@types/graphql";
import Layout from "../components/Layout";

interface ReferenceProps {
    content: string;
    description: string;
    title: string;
    helmet?: React.ReactElement
}

export const ReferenceTemplate: React.SFC<ReferenceProps> = ({
    content,
    description,
    title,
    helmet
}) => {

    return (
        <section className="section">
            {helmet}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <div>{content}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface BolgPostTemplateProps {
    data: Query,
}

const Reference = ({ data }: BolgPostTemplateProps) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <ReferenceTemplate
                content={post.html}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title}
            />
        </Layout>
    );
};

export default Reference;

export const pageQuery = graphql`
  query ReferenceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
