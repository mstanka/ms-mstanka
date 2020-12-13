import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  /* font-family: "Merienda One", cursive; */
  font-size: 1.4rem;

  a {
    color: ${colors.darkColor};
    display: inline-block;
    padding: 1rem;
  }

  li {
    display: inline-block;
    margin-right: 1rem;
    border: 2px dotted transparent;
    text-transform: uppercase;
    transition: all 0.5s ease;

    .active {
      font-weight: bold;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      border: 2px dotted ${props => props.theme.colors.textSecond};
    }
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`
