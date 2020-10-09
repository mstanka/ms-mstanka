import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "images/mstanka.png"
import menuIcon from "images/menu-open.svg"

import {
  HeaderWrapper,
  Inner,
  LogoWrapper,
  Logo,
  Toggle,
  MenuIcon,
  NavLinkWrapper,
} from "components/Header/header.styles"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <HeaderWrapper>
      <Inner>
        <LogoWrapper>
          <NavLink to="/">
            <Logo src={logo} alt="Logo" />
          </NavLink>
        </LogoWrapper>
        <Toggle onClick={() => toggleExpansion(!isExpanded)}>
          <MenuIcon src={menuIcon} alt="Menu Icon" />
        </Toggle>
        <NavLinkWrapper className={`${isExpanded ? `visible` : `hidden`}`}>
          <NavLink to="/">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog </NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinkWrapper>
      </Inner>
    </HeaderWrapper>
  )
}

NavLink.propTypes = {
  isActive: PropTypes.string,
}

export default Header
