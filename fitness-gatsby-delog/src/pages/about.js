import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
  <Layout>
      <Helmet>
          <title>About — {site.siteMetadata.title}</title>
          <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -about">
          <div className="post-thumbnail" style={{backgroundImage: `url('/fitness/assets/flower-life-green.jpg')`, marginBottom: 0}}>
              <h1 className="post-title">About Us</h1>
              <div>
                [insert image]
              </div>
            </div>
            <div>
                <p>The Masses Project will guide citizens to thrive again through good old natural human methods. 
                      We promote physical activity &amp; wellness as a lifestyle! Masses Project programs will provide you with 
                      nutritious guidelines &amp; recipes along with conscuious eating habits as well as safely effective exercises.</p>
                  <p>What's so different about our program you ask?</p>
                  <p>We train your body based on scientific &amp; tested methods. We determine your adaptability to increasing exercise intensities &amp; nutritional considerations based on each individual &dash; height, age, BMI, body fat, lean mass, and other underlying factors suggested by NCCA, ACE, and J&amp;P.</p>
                  <p>Purchase a specialty for you NOW so you can see what your stamina really offers. It is time to be happy, fruitful, and full of energy for the masses!</p>
            </div>
        </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`