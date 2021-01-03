import React from "react"
import { Link, graphql } from "gatsby"
// Components
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      <main>
        <div style={{ paddingBottom: "1rem" }}>{post.frontmatter.date}</div>
        <h2 style={{ paddingBottom: "1rem" }}>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to={`/blog`}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size="2x"
            color="var(--quat-color)"
            style={{ marginRight: ".5rem", marginTop: "2rem" }}
          />          
          <span>Back to the Posts</span>
        </Link>
      </main>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY", locale: "us")
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
