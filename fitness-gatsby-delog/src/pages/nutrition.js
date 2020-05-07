import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const NutritionPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Nutrition — {site.siteMetadata.title}</title>
        <meta name="description" content={"Nutrition page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/fitness/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Nutrition</h1>
          <p>Recipies along with Intermediate and Pro packages avaialble.</p>
        </div>
      </div>
    </Layout>
  )
}
export default NutritionPage
export const pageQuery = graphql`
  query NutritionPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`