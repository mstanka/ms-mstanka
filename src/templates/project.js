import React from "react"
import { Link, graphql } from "gatsby"
// Components
import Layout from "components/Layout/Layout"
import Image from "components/Image/Image"
import SEO from "components/SEO/SEO"
// Icons
import LeftIcon from "images/arrow-left.svg"

const Project = ({ data }) => {
  const project = data.markdownRemark

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Image fluid={project.frontmatter.image.childImageSharp.fluid} />
      <main>       
        <h2>{project.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
        <Link to={`/projects`}>
          <input
            type="image"
            alt="left-nav"
            src={LeftIcon}
            style={{ width: "30px", height: "30px" }}
          />
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
        date(formatString: "MMMM, YYYY", locale: "us")
        image {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
