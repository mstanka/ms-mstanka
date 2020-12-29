import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// components
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

// context
import { ModeContext } from "../../context/ModeProvider"

// styles
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header siteTitle={data.title} />
      <main>{children}</main>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
