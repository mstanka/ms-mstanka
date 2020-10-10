import styled from "styled-components"

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  font-family: "Merienda One", cursive;
  font-size: 1.4rem;

  a {
    color: ${props => props.theme.colors.textSecond};
    display: inline-block;
    padding: 1rem;
  }

  li {
    display: inline-block;
    margin-right: 1rem;
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
