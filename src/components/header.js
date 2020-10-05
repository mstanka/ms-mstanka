import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "images/mstanka.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.headerBG};
  margin-bottom: 1.45rem;
  font-size: 1.7rem;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const LogoWrapper = styled.div`
  display: flex;
`

const Logo = styled.img`
  width: 70px;
  padding: 3px;
  margin-right: 16px;
  border: 1px solid ${props => props.theme.colors.cardBG};
  border-radius: 50%;
`

const NavLinkWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  & > a {
    display: inline-block;
    text-decoration: none;
    padding: 1rem;
  }

  .active {
    color: ${props => props.theme.colors.proBG};
  }

  .active:hover,
  .navlink:hover {
    color: ${props => props.theme.colors.proBG};
    border: 1px dotted ${props => props.theme.colors.proBG};
  }

  .navlink {
    color: ${props => props.theme.colors.cardBG};
  }
`

const Header = () => (
  <HeaderWrapper>
    <Inner>
      <LogoWrapper>
        <NavLink to="/">
          <Logo src={logo} alt="Logo" />
        </NavLink>
      </LogoWrapper>
      <NavLinkWrapper>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinkWrapper>
    </Inner>
  </HeaderWrapper>
)

NavLink.propTypes = {
  isActive: PropTypes.string,
}

export default Header
