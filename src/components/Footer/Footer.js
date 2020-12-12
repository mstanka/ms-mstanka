import React from "react"

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// styles
import { Wrapper } from "./Footer.styles.js"

const Footer = () => {
  const data = useMetaDataQuery()

  return (
    <Wrapper>
      <div>
        {" "}
        © {new Date().getFullYear()}, Built by
        {` `} {data.author} {` `} using{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby{" "}
        </a>
        and{" "}
        <a href="https://icons8.com/" target="_blank" rel="noreferrer noopener">
          Icons8
        </a>
        .
      </div>
    </Wrapper>
  )
}

export default Footer
