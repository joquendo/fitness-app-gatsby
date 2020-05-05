import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const TestimonialsPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Testimonials — {site.siteMetadata.title}</title>
        <meta name="description" content={"Testimonials of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Testimonials</h1>
          <p>Free tutorials in
            <ul>
              <li>Reviews</li>
              <li>Transformation photos</li>
              <li>News</li>
            </ul></p>
        </div>
      </div>
    </Layout>
  )
}
export default TestimonialsPage
export const pageQuery = graphql`
  query TestimonialsPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`