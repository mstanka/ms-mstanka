
import styled from "styled-components"
import { colors } from "styles/GlobalStyles"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.headerBG};
  margin-bottom: 1.45rem;
  font-size: 1.7rem;
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

export const LogoWrapper = styled.div`
  display: flex;
`

export const Logo = styled.img`
  width: 70px;
  padding: 3px;
  margin-right: 16px;
  border: 1px solid ${colors.lightColor};
  border-radius: 50%;
`

export const Toggle = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled.img`
  width: 25px;
  height: 25px;
  fill: current;
`

export const NavLinkWrapper = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  a {
    padding: 1rem;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  .visible {
    display: flex;
  }

  .hidden {
    display: none;
  }

  .active {
    color: ${props => props.theme.colors.textSecond};
  }

  .active:hover,
  .navlink:hover {
    color: ${props => props.theme.colors.textSecond};
    border: 1px dotted ${props => props.theme.colors.textSecond};
  }

  .navlink {
    color: ${colors.lightColor};
  }
`
