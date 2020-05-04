import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About the programs" />
    <h1>Fitness Program - Get Started!</h1>
    <p>Welcome to the umbrella corp of fitness. Sign up with the form below and you will be contacted by a health coach.</p>
    <Link to="/">Go Back</Link>
    <img src="http://via.placeholder.com/1240x360"></img>
  </Layout>
)

export default SecondPage
