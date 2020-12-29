import React, { useState } from "react"
import { Link } from "gatsby"

// hooks
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

// componenents
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"
import ThemeChanger from "../ThemeChanger"

// styles
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: var(--header-bg);
  font-size: 1.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
`

const Logo = styled.img`
  max-width: 100px;
  padding: 3px;
  border: 1px solid var(--light-color);
  border-radius: 50%;
`

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
