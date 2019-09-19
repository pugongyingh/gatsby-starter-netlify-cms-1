import * as React from "react";
import Content, { ContentFormatter } from "../components/CMS/Content";
import Footer from "../components/Layout/Footer";
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
            <Navbar title="Blog" fixed={true} locale={locale} />
            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                                {title}
                            </h1>
                            <h3>{description}</h3>
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
    h1 {
        font-style: normal;
        font-weight: 800;
        font-size: 35px;
        line-height: 128%;
        letter-spacing: 0.03em;
        text-align: center;

        @media ${({ theme }) => theme.screen.laptop} {
            text-align: left;
            font-size: 46px;
        }

        &:not(.title) {
            @media ${({ theme }) => theme.screen.laptopL} {
                text-align: left;
                font-size: ${({ theme }) => theme.fontSizes.h1};
            }
        }

    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h2};

        @media ${({ theme }) => theme.screen.laptopL} {
            text-align: left;
            font-size: ${({ theme }) => theme.fontSizes.h2};
        }
    }

    section:first-of-type {
        padding: 3rem 0;
        min-height: calc(100vh - 225px - 120px);

        @media ${({ theme }) => theme.screen.laptop} {
            padding: 12rem 0 6rem;
        }
    }
    .content {
        @media ${({ theme }) => theme.screen.laptop} {
            padding: 0 11.25rem !important
        }
    }
`;