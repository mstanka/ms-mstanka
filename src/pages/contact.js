import React from "react"

import Layout from "components/Layout/Layout"
import ContactComp from "components/ContactComp/ContactComp"
import SEO from "components/SEO/SEO"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactComp />
    </Layout>
  )
}
export default ContactPage
