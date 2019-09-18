import * as React from "react";
import Content, { ContentFormatter } from "../components/CMS/Content";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import styled, { SCP } from "../styles/theme";

interface BlogPostProps extends SCP {
    content: string;
    contentComponent?: (props: ContentFormatter) => React.ReactElement;
    description: string;
    title: string;
    helmet?: React.ReactElement
    locale: string;
}

export const BlogPostTemplate: React.SFC<BlogPostProps> = ({
    content,
    contentComponent,
    description,
    title,
    locale,
    className
}) => {
    const PostContent = contentComponent || Content;
    return (
        <div className={className}>
            <Navbar title="Blog" compactTitle="Blog" fixed={true} locale={locale} compact={true}/>
            <section className="section">
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
            <Footer locale={locale} />
        </div>
    );
};

export const StyledBlogPostTemplate = styled(BlogPostTemplate)`
    section:first-of-type {
        padding: 3rem 0 0;
        min-height: calc(100vh - 225px - 120px);

        @media ${({ theme }) => theme.screen.laptop} {
            padding: 12rem 0 0;
        }
    }
`;