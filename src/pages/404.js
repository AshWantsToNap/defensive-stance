import React from "react"
import { graphql } from "gatsby"
import Spinner from "../components/spinner"
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1 style={{ textAlign: `center`}}>404: Not Found</h1>
        <div style={{ textAlign: `center`, alignItems: `center` }}>
          <Spinner />
            <p>Oops, we rolled a critical failure on our perception skill check.</p>
            <p>We could not find that page for you.</p>
            <p><a href="/">Return home and try again.</a></p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
