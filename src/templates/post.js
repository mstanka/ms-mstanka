import React from "react"
import { Link, graphql } from "gatsby"
// Components
import Layout from "../components/Layout/Layout"
import Image from "../components/Image/Image"
import SEO from "../components/SEO/SEO"
// Icons
import LeftIcon from "../images/arrow-left.svg"

const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      <main>
        <div style={{ paddingBottom: "1rem" }}>{post.frontmatter.date}</div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to={`/blog`}>
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
