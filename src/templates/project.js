import React from "react"
import { Link, graphql } from "gatsby"
// Components
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft, faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
            alt="Preview"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faEye} size="3x" color="var(--quat-color)" />
          </a>
          <a
            href={project.frontmatter.github}
            alt="Github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              color="var(--quat-color)"
            />
          </a>
        </div>

        <div dangerouslySetInnerHTML={{ __html: project.html }} />

        <Link to={`/projects`}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size="2x"
            color="var(--quat-color)"
            style={{ marginRight: ".5rem", marginTop: "2rem" }}
          />
          <span>Back to the Projects</span>
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
