import React from "react"
import { Link, graphql } from "gatsby"
// Components
import Layout from "../components/Layout/Layout"
import Image from "../components/Image/Image"
import SEO from "../components/SEO/SEO"
// Icons
import LeftIcon from "../images/arrow-left.svg"
import Preview from "../images/eye-outline.svg"
import Github from "../images/logo-github.svg"

const Project = ({ data }) => {
  const project = data.markdownRemark

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Image
        fluid={project.frontmatter.image.childImageSharp.fluid}
        style={{ objectFit: "cover" }}
      />
      <main>
        <h2 style={{ textAlign: "center" }}>{project.frontmatter.title}</h2>
        <h3 style={{ textAlign: "center" }}>{project.frontmatter.subtitle}</h3>

        <div
          style={{
            maxWidth: "200px",
            margin: "3rem auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a
            href={project.frontmatter.preview}
            target="_blank"
            rel="noreferrer noopener"
          >
            <input
              type="image"
              alt="Preview"
              src={Preview}
              style={{ width: "4rem", height: "4rem" }}
            />
          </a>
          <a
            href={project.frontmatter.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <input
              type="image"
              alt="Github"
              src={Github}
              style={{ width: "4rem", height: "3rem" }}
            />
          </a>
        </div>

        <div dangerouslySetInnerHTML={{ __html: project.html }} />

        <Link to={`/projects`}>
          <input
            type="image"
            alt="left-nav"
            src={LeftIcon}
            style={{ width: "30px", height: "30px", marginTop: "2rem" }}
          />
          <div>Back to the Projects</div>
        </Link>
      </main>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        preview
        github
        date(formatString: "MMMM, YYYY", locale: "us")
        image {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
