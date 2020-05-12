import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const TrainingPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Training — {site.siteMetadata.title}</title>
        <meta name="description" content={"Training page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/flower-life-green.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Training</h1>
          <p>3 Stages</p>
        </div>
      </div>
    </Layout>
  )
}
export default TrainingPage
export const pageQuery = graphql`
  query TrainingPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`