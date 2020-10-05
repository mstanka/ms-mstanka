import React from "react"

import Layout from "components/layout"
import HomeIntro from "components/homeIntro"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntro /> 

  </Layout>
)

export default IndexPage
