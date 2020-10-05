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
  background: #3a3f44;
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
  border: 1px solid #e9ecef;
  border-radius: 50%;
`

const NavLinkWrapper = styled(Link)`
  display: flex;
  justify-content: space-between; 
  text-transform: uppercase;
  color: white;

  & > a {
    display: inline-block;
    text-decoration: none;
    padding: 1rem;
  }

  .active {
    color: #ee5f5b;
  }

  .active:hover,
  .navlink:hover {
    color: white;
    border: 1px dotted white;
  }

  .navlink {
    color: white;
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
