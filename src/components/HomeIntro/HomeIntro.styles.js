import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--light-color);
  color: var(--dark-color);
  border: 1px solid var(--primary-text-color);
  padding-top: 2rem;
  padding-bottom: 5rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`

export const HeroName = styled.h1`
  color: var(--secondary-text-color);
`

export const HeroTitle = styled.h2`
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    var(--primary-text-color),
    var(--tertiary-color),
    var(--primary-text-color)
  );
  background-size: 200%;
  background-position: 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 5s linear infinite;
  padding-bottom: 2rem;

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`

export const HeroImageWrapper = styled.div`
  max-width: 20rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    max-width: 35rem;
  }

  img {
    width: 100%;
  }
`

export const HeroText = styled.div`
  text-align: center;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
`
