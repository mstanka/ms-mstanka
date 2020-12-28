import styled, { createGlobalStyle } from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
  }
`

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  left: ${props => (props.menuOpen ? '0px' : '-320px')};
  width: 320px;
  background: ${props => props.theme.colors.headerBG};
  top: 0;
  padding: 0;
  transition: all .3s ease;
  z-index: 10;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Nav = styled.ul`
  position: absolute;
  width: 60%;
  height: 100vh;
  top: 100px;
  list-style-type: none;
  padding: 0 2rem;
  /* font-family: "Merienda One", cursive; */
  font-size: 1.2rem;
  background: ${props => props.theme.colors.headerBG};
  transition: all 0.5s ease;

  a {
    color: ${colors.darkColor};
    display: inline-block;
  }

  li {
    padding: 1rem 0;
    text-align: center;
    text-transform: uppercase;

    .active {
      font-weight: bold;
    }

    :hover {
      border: 2px dotted ${props => props.theme.colors.textSecond};
    }
  }
`
