import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import get from "lodash/get"
import Layout from "../components/layout/layout"

class PageTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulPage")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
    }
  }
`
