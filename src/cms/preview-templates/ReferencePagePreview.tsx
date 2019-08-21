import React from 'react'
import { ReferenceTemplate } from '../../templates/reference-page'

const ReferencePreview = ({ entry, widgetFor }: any) => (
  <ReferenceTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default ReferencePreview
