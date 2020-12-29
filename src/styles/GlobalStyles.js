import { createGlobalStyle } from "styled-components"
import MeriendaOneRegular from "../fonts/MeriendaOne-Regular.ttf"
import RobotoRegular from "../fonts/Roboto-Regular.ttf"

export const colors = {
  primColor: "#8b0101",
  secondColor: "#FF552A",
  tertColor: "#34cb43",
  quatColor: "#7f8091",
  darkColor: "#0f0e17",
  lightColor: "#fffffe",
}

export const lightTheme = {
  colors: {
    mainBG: colors.darkColor,
    headerBG: colors.secondColor,
    cardBG: colors.secondColor,
    proBG: colors.lightColor,
    text: colors.darkColor,
    textSecond: colors.tertColor,
    textQuat: colors.quatColor,
    link: colors.secondColor,
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
    textQuat: colors.tertColor,
    link: colors.secondColor,
  },
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
      font-family: 'Merienda One';
      src: local('MeriendaOneRegular'), 
        url(${MeriendaOneRegular}) format('ttf');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('RobotoRegular'), 
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
    padding: 0 1rem;
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
      margin: 10px 0 0 0;
      
      @media screen and (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

  a {
    text-decoration: none;
    font-family: 'Merienda One', cursive;
    transition: all 0.5s ease;
    color: ${props => props.theme.colors.link};
  }
`
