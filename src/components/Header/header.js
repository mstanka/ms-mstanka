import React, { useState } from "react"
import { Link } from "gatsby"

// hooks
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

// componenents
import Menu from "../Menu/Menu"
import Hamburger from "../Hamburger/Hamburger"
import MobileMenu from "../MobileMenu/MobileMenu"
import ThemeChanger from "../ThemeChanger/ThemeChanger"

// styles
import { HeaderWrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle }) => {
  const siteConfig = useSiteConfigQuery()  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <ThemeChanger />
    </HeaderWrapper>
  )
}

export default Header
