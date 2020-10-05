import { createGlobalStyle } from "styled-components"
import MeriendaOneRegular from "fonts/MeriendaOne-Regular.ttf"
import RobotoRegular from "fonts/Roboto-Regular.ttf"

export const colors = {
  primColor: "#FF552A",
  secondColor: "#802A14",
  tertColor: "#51d25d",
  quatColor: "#2e7234",
  darkColor: "#272b30",
  lightColor: "#fff",
}

export const darkTheme = {
  colors: {
    mainBG: colors.darkColor,
    headerBG: colors.lightColor,
    cardBG: colors.secondColor,
    proBG: colors.primColor,
    text: colors.lightColor,
    textSecond: colors.tertColor,
  },
}

export const lightTheme = {
  colors: {
    mainBG: colors.lightColor,
    headerBG: colors.darkColor,
    cardBG: colors.quatColor,
    proBG: colors.tertColor,
    text: colors.darkColor,
    textSecond: colors.primColor,
  },
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
      font-family: 'Merienda One';
      src: local('MeriendaOneRegular'), local('MeriendaOneRegular'),
        url(${MeriendaOneRegular}) format('ttf');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('RobotoRegular'), local('RobotoRegular'),
      url(${RobotoRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.proBG};
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    
    transition: all 0.5s ease;
  }

  main {
    max-width: 960px;
    margin: 40px auto;
  }

  h1, h2, h3, h4, h5, h6, ul {
    font-family: 'Merienda One', cursive;
    transition: all 0.5s ease;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      margin: 30px 0 -15px 0;
      @media screen and (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

  a {
    text-decoration: none;
  }
`
