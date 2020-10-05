import React from "react"
import styled from "styled-components"
import WebDevImage from "images/undraw_web_dev.svg"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
  color: #250c05;
  padding-top: 10rem;
  padding-bottom: 5rem;
  margin: 0;

  /* @include media-md {
    padding-top: 8rem;
  } */
`

const HeroName = styled.h1`
  color: #802a14;
`

const HeroTitle = styled.h2`
  text-transform: uppercase;
  background-image: linear-gradient(to right, #ff552a, #51d25d, #ff552a);
  background-size: 200%;
  background-position: 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 5s linear infinite;

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

const HeroImageWrapper = styled.div`
  max-width: 35rem;
`

const HeroText = styled.div`
  text-align: center;
  padding: 0 3rem;
`

const HomeIntro = () => (
  <Wrapper>
    <HeroName> Marketa Stankova</HeroName>
    <HeroTitle>Frontend Developer</HeroTitle>
    <HeroImageWrapper>
      <img src={WebDevImage} alt="Web Development" />
    </HeroImageWrapper>    
    <HeroText>
      I build modern responsive websites using{" "}
      <a href="https://jamstack.org/">JAMstack</a> approach. After several
      websites built on Wordpress, I found excitement in using HTML/CSS and
      Javascript's frameworks. I learn about programming in general, about UI/UX
      design, cloud technologies, and other exciting topics.
    </HeroText>
  </Wrapper>
)

export default HomeIntro
