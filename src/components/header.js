import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3a3f44`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/*Title, Logo */}
      <div style={{ display: "flex" }}>
        <img
          src={gatsbyLogo}
          alt="Gatsby Garb Logo"
          style={{
            width: "50px",
            padding: "3px",
            marginRight: "16px",
            border: "1px solid #e9ecef",
            borderRadius: "50%",
          }}
        />

        <h1 style={{ margin: 0 }}>
          <NavLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </NavLink>
        </h1>
      </div>
      <div>
        <NavLink
          to="/about"
          style={{
            display: "inline-block",
            textTransform: "uppercase",
            marginRight: "2rem",
            padding: "10px",
          }}
        >
          About{" "}
        </NavLink>
        <NavLink
          to="/blog"
          style={{
            display: "inline-block",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          Blog{" "}
        </NavLink>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
