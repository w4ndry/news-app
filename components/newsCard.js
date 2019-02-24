import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

const NewsCard = ({data}) => (
  <Card
    image={data && data.urlToImage}
    header={data && data.title}
    meta={data && data.publishedAt}
    description={data && data.description}
  />
)

export default connect()(NewsCard)
