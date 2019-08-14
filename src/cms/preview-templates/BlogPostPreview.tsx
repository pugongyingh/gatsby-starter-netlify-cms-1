import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }:any) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    helmet=""
    contentComponent=""
  />
)

export default BlogPostPreview
