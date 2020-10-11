import React from "react"

import Layout from "components/Layout/Layout"
import HomeIntro from "components/HomeIntro/HomeIntro"
import SEO from "components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro /> 

  </Layout>
)

export default IndexPage
