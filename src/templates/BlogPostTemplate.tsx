import * as React from "react";
import Content, { ContentFormatter } from "../components/CMS/Content";
import Contact from "../components/Contact/Contact";
import InstagramRoll from "../components/Instagram/InstagramRoll";
import Footer from "../components/Layout/Footer";

interface BlogPostProps {
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
    locale
}) => {
    const PostContent = contentComponent || Content;
    return (
        <div>
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
};