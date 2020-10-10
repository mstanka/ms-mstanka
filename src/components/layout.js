/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
import { GlobalStyles, darkTheme } from "styles/GlobalStyles"

import Header from "components/Header/Header"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `} {data.author} {` `} using Gatsby.
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
