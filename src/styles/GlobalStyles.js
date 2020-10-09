import { createGlobalStyle } from "styled-components"
import MeriendaOneRegular from "fonts/MeriendaOne-Regular.ttf"
import RobotoRegular from "fonts/Roboto-Regular.ttf"

export const colors = {
  primColor: "#FF552A",
  secondColor: "#802A14",
  tertColor: "#51d25d",
  quatColor: "#2e7234",
  darkColor: "#213548",
  lightColor: "#f0f0f0",
}

export const lightTheme = {
  colors: {
    mainBG: colors.darkColor,
    headerBG: colors.primColor,
    cardBG: colors.secondColor,
    proBG: colors.lightColor,
    text: colors.darkColor,
    textSecond: colors.tertColor,
  },
}

export const darkTheme = {
  colors: {
    mainBG: colors.lightColor,
    headerBG: colors.tertColor,
    cardBG: colors.quatColor,
    proBG: colors.darkColor,
    text: colors.lightColor,
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

  h1 {
    font-size: 1.6rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin: 30px 0 -15px 0;
    @media screen and (min-width: 768px) {
      font-size: 2.4rem;
    }
  }


  h2 {
    font-size: 1.3rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  h3 {
      font-size: .8rem;
      letter-spacing: 1.5px;
      margin: 30px 0 -15px 0;
      @media screen and (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

  a {
    text-decoration: none;
    font-family: 'Merienda One', cursive;
    transition: all 0.5s ease;
  }
`
