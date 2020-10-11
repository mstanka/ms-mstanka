import React from "react"
import { graphql } from "gatsby"
// Components
import Layout from "components/Layout/Layout"
import SEO from "components/SEO/SEO"
import ProjectCard from "components/ProjectCard/ProjectCard"

const ProjectPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <main>
        {projects.map(({ node }) => {
          return (
            <ProjectCard
              key={node.fields.slug}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query projectListQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "project" }, published: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY", locale: "us")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
