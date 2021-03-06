import React from "react"
import { graphql } from "gatsby"
// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectCard from "../components/ProjectCard"

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
              subtitle={node.frontmatter.subtitle}
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY", locale: "us")
            title
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
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
