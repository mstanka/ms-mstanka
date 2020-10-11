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
        {` `} {data.author} {` `} using Gatsby.
      </div>
    </Wrapper>
  )
}

export default Footer
