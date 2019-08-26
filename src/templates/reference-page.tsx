import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Content, { ContentFormatter, HTMLContent } from "../components/CMS/Content";
import { Preview } from "../components/CMS/Preview";
import Page from "../components/Layout/Page";
import { Query } from "../graphql/types";

interface ReferenceProps {
    content: string;
    contentComponent?: (props: ContentFormatter) => React.ReactElement;
    description: string;
    title: string;
    helmet?: React.ReactElement
}

export const ReferenceTemplate: React.SFC<ReferenceProps> = ({
    content,
    contentComponent,
    description,
    title,
    helmet
}) => {
    const PostContent = contentComponent || Content;

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
                        <PostContent content={content} />
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
    const { markdownRemark: page } = data;

    if (!page || !page.frontmatter) {
        throw new Error("Data loading error");
    }

    return (
        <Page>
            <ReferenceTemplate
                content={page.html || ""}
                contentComponent={HTMLContent}
                description={page.frontmatter.description || ""}
                helmet={
                    <Helmet titleTemplate="%s">
                        <title>{`${page.frontmatter.title}`}</title>
                        {page.frontmatter.description &&
                            <meta
                                name="description"
                                content={`${page.frontmatter.description}`}
                            />
                        }
                    </Helmet>
                }
                title={page.frontmatter.title!}
            />
        </Page>
    );
};

export const ReferencePreview = ({ entry, widgetFor }: any) => (
    <Preview>
        <ReferenceTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            title={entry.getIn(['data', 'title'])}
        />
    </Preview>
)

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

export default Reference;