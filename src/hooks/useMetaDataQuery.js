import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}


