import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// components
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"

// context
import { ModeContext } from "context/ModeProvider"

// styles
import { GlobalStyles, darkTheme, lightTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={ data.title } />

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
