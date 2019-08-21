import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ReferencePreview from "./preview-templates/ReferencePagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("reference", ReferencePreview);
