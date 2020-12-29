import styled from "styled-components"

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  font-size: 1.4rem;

  a {
    color: var(--dark-color);
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
      border: 2px dotted var(--secondary-text-color);
    }
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`
