import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import { BlogPostPreview } from "./pages/BlogPost";
import { IndexPagePreview } from "./pages/IndexPage";

const CSSInjector = (props: any) => {
    const iframe = document.getElementsByTagName('iframe')[0];
    if (iframe) {
        return (
            <StyleSheetManager target={iframe.contentDocument!.head}>
                {props.children}
            </StyleSheetManager>
        )
    }
    return null;
}

CMS.registerPreviewTemplate('index-cs', (props: any) => (
    <CSSInjector>
        <IndexPagePreview {...props} />
    </CSSInjector>
))

CMS.registerPreviewTemplate('index-en', (props: any) => (
    <CSSInjector>
        <IndexPagePreview {...props} />
    </CSSInjector>
))

CMS.registerPreviewTemplate('blog', (props: any) => (
    <CSSInjector>
        <BlogPostPreview {...props} />
    </CSSInjector>
))

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
