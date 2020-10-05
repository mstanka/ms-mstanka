import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "components/layout"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
 const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <Layout>
      <h1
        style={{
          display: "inlineBlock",
          borderBottom: "1px solid",
          paddingBottom: "10px",
        }}
      >
        Blog Posts
      </h1>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ paddingTop: "10px" }}>
            <h2>
              <Link
                to={`/posts${node.fields.slug}`}
                style={{ textDecoration: "none", color: "#ee5f5b" }}
              >
                {node.frontmatter.title}
              </Link>
            </h2>
            <span
              style={{
                color: "#3e444c",
                fontWeight: "bold",
                fontSize: "16px",
                paddingRight: "32px",
              }}
            >
              Posted {node.frontmatter.date}
            </span>
            <span style={{ color: "#3e444c", fontSize: "16px" }}>
              Time to read:{" "}
              <span>
                {node.timeToRead} {node.timeToRead > 1 ? "minutes" : "minute"}{" "}
              </span>
            </span>
            <p style={{ paddingTop: "10px" }}>{node.excerpt}</p>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY", locale: "us")
          }
          excerpt
          id
          timeToRead
        }
      }
    }
  }
`
