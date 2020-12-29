import React from "react"
import PropTypes from "prop-types"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// components
import Footer from "../Footer"
import Header from "../Header"

// styles
import "../../styles/global.scss"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()

  return (
    <div>
      <Header siteTitle={data.title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
