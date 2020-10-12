import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import WebDevImage from "images/undraw_web_dev.svg"

import {
  Wrapper,
  HeroName,
  HeroTitle,
  HeroImageWrapper,
  HeroText,
} from "./HomeIntro.styles"

const HomeIntro = () => {
  const data = useStaticQuery(graphql`
    query HomeIntroQuery {
      markdownRemark(frontmatter: { type: { eq: "about" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `)

  return (
    <Wrapper>
      <HeroName>{data.markdownRemark.frontmatter.title}</HeroName>
      <HeroTitle>{data.markdownRemark.frontmatter.subtitle}</HeroTitle>
      <HeroImageWrapper>
        <img src={WebDevImage} alt="Web Development" />
      </HeroImageWrapper>
      <HeroText
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Wrapper>
  )
}

export default HomeIntro

////// with StaticQuery ///////

// const HomeIntro = () => (
//   <StaticQuery
//     query={graphql`
//       query HomeIntroQuery {
//         markdownRemark(frontmatter: { type: { eq: "about" } }) {
//           frontmatter {
//             title
//             subtitle
//           }
//           html
//         }
//       }
//     `}
//     render={data => (
//       <Wrapper>
//         <HeroName>{data.markdownRemark.frontmatter.title}</HeroName>
//         <HeroTitle>{data.markdownRemark.frontmatter.subtitle}</HeroTitle>
//         <HeroImageWrapper>
//            <img src={WebDevImage} alt="Web Development" />
//         </HeroImageWrapper>
//         <HeroText
//           dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
//         />
//       </Wrapper>
//     )}
//   />
// )
