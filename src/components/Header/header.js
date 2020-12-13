import React, { useState, useContext } from "react"
import { Link } from "gatsby"

// hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

// componenents
import Menu from "components/Menu/Menu"
import Hamburger from "components/Hamburger/Hamburger"
import MobileMenu from "components/MobileMenu/MobileMenu"
import ModeButton from "components/ModeButton/ModeButton"

// context
import { ModeContext } from "context/ModeProvider"

// styles
import { HeaderWrapper, Logo } from "components/Header/Header.styles"

const Header = ({ siteTitle }) => {
  const siteConfig = useSiteConfigQuery()
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </HeaderWrapper>
  )
}

export default Header
