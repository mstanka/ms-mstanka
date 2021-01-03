import React from "react"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// styles
import { Wrapper } from "./Footer.styles"

const Footer = () => {
  const data = useMetaDataQuery()

  return (
    <Wrapper>
      <div>
        {" "}
        © {new Date().getFullYear()}, by
        {` `} {data.author} {` `} using{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby.{" "}
        </a>
      </div>
    </Wrapper>
  )
}

export default Footer
