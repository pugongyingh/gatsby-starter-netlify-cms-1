import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import { main } from "./styles/main";
import { css } from "./styles/theme";
import { BlogPostPreview } from "./templates/blog-post";
import { IndexPagePreview } from "./templates/index-page";


class CSSInjector extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            iframeRef: ''
        }
    }

    public componentDidMount() {
        const iframe = document.getElementsByTagName('iframe')[0];
        const iframeHeadElem = iframe.contentDocument!.head;
        this.setState({ iframeRef: iframeHeadElem })
    }

    public render() {
        return (
            <div>
                {this.state.iframeRef && (
                    <StyleSheetManager target={this.state.iframeRef}>
                        {this.props.children}
                    </StyleSheetManager>
                )}
            </div>
        )
    }
}

CMS.registerPreviewTemplate('index', (props: any) => (
    <CSSInjector>
        {/* FIXME: !!!!! */}
        <div>
            <style>
                {css`${main}`}
            </style>
            <IndexPagePreview {...props} />
        </div>
    </CSSInjector>
))

CMS.registerPreviewTemplate('blog', (props: any) => (
    <CSSInjector>
        {/* FIXME: !!!!! */}
        <div>
            <style>
                {css`${main}`}
            </style>
            <BlogPostPreview {...props} />
        </div>
    </CSSInjector>
))

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
