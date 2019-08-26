import PropTypes from "prop-types";
import React from "react";

export interface ContentFormatter {
  content: any;
  className?: string;
}

export const HTMLContent = ({ content, className }: ContentFormatter) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }: ContentFormatter) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
