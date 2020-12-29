import React from "react"

import Layout from "../components/Layout"
import HomeIntro from "../components/HomeIntro"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro />
  </Layout>
)

export default IndexPage
