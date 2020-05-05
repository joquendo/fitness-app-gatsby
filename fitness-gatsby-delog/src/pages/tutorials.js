import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const TutorialPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Tutorials — {site.siteMetadata.title}</title>
        <meta name="description" content={"Tutorials of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Tutorials</h1>
          <p>Free tutorials in
            <ul>
              <li>Breath + Alignment [1, 2, 3]</li>
              <li>Total Body Cardio [1, 2, 3]</li>
              <li>Ab fitness [1, 2, 3]</li>
            </ul></p>
        </div>
      </div>
    </Layout>
  )
}
export default TutorialPage
export const pageQuery = graphql`
  query TutorialPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`