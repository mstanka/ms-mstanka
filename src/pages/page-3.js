import React from "react"
import Layout from "components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function () {
  const data = useStaticQuery(graphql`
    query GetFileData {
      allFile {
        edges {
          node {
            relativePath
            size
            ext
            birthTime
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Hello from Page3</h1>
      <h2>Files Data</h2>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Extension</th>
            <th>Bith Time</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({node}, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.size}</td>
              <td>{node.ext}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>     
    </Layout>
  )
}
