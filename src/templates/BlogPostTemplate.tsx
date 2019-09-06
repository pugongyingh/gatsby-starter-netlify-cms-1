import * as React from "react";
import Content, { ContentFormatter } from "../components/CMS/Content";

interface BlogPostProps {
    content: string;
    contentComponent?: (props: ContentFormatter) => React.ReactElement;
    description: string;
    title: string;
    helmet?: React.ReactElement
}

export const BlogPostTemplate: React.SFC<BlogPostProps> = ({
    content,
    contentComponent,
    description,
    title,
    helmet,
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