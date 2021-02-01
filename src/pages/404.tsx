import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from '../components'

interface Props {
  readonly data: PageQueryData
}

const Error: React.FC<Props> = ({ data }) => {
    const title = data.site.siteMetadata.title

    return (
      <Layout>
      <SEO title="404" />
        <h1>Uh oh... Not Found</h1>
        <p>You just hit a route that doesn't exist!</p>
      </Layout>
    )
}


interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default Error
