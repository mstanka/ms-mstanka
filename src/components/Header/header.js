import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"

// componenents
import Menu from 'components/Menu/Menu'
import Hamburger from 'components/Hamburger/Hamburger'
import MobileMenu from 'components/MobileMenu/MobileMenu'

// styles
import {
  HeaderWrapper,
  Logo,  
} from "components/Header/Header.styles"

const Header = ({ siteTitle = `` }) => {
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
      <div>
      Mode Button
      </div>
    </HeaderWrapper>
  )
}


export default Header
