import React from "react"

import WebDevImage from "images/undraw_web_dev.svg"

import {
  Wrapper,  
  HeroName,
  HeroTitle,
  HeroImageWrapper,
  HeroText,
} from "./HomeIntro.styles"

const HomeIntro = () => (
  <Wrapper>
    <HeroName> Marketa Stankova</HeroName>
    <HeroTitle>Web Developer and Designer</HeroTitle>
    <HeroImageWrapper>
      <img src={WebDevImage} alt="Web Development" />
    </HeroImageWrapper>
    <HeroText>
      I build modern responsive websites using{" "}
      <a href="https://jamstack.org/">JAMstack</a> approach. After several
      websites built on Wordpress, I found excitement in using HTML/CSS and
      Javascript's frameworks. I learn about programming in general, about UI/UX
      design, cloud technologies, and other interesting topics.
    </HeroText>
  </Wrapper>
)

export default HomeIntro
