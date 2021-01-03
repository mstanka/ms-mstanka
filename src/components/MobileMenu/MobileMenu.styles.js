import styled, { createGlobalStyle } from "styled-components"

export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
  }
`

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  left: ${props => (props.menuOpen ? '0px' : '-768px')};
  background: var(--header-bg);
  top: 0;
  padding: 0;
  transition: all 1s ease-in-out;
  z-index: 10;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Nav = styled.ul`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 150px;
  list-style-type: none;
  padding: 0 2rem;
  font-size: 1.2rem;
  background: var(--header-bg);
  transition: all 0.5s ease;

  a {
    color: var(--dark-color);
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
      border: 2px dotted var(--secondary-text-color);
    }
  }
`
