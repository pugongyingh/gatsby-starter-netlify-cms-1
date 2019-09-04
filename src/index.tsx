import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import { IndexPagePreview } from "./pages/index-page";

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

CMS.registerPreviewTemplate('index', (props: any) => (
    <CSSInjector>
        <IndexPagePreview {...props} />
    </CSSInjector>
))

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
