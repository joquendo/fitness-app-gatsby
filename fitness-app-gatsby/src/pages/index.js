import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to <b>your new fitness source</b>.</p>
    <p>I'm here to keep you in your healthiest body for the rest of your life.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/program/">Sign up to get Started</Link>
  </Layout>
)

export default IndexPage
