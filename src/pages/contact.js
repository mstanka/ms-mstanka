import React from "react"

import Layout from "../components/Layout"
import ContactComp from "../components/ContactComp"
import SEO from "../components/SEO"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactComp />
    </Layout>
  )
}
export default ContactPage
