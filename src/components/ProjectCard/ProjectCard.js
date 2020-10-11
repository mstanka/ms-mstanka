import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  Title,
} from "./ProjectCard.styles"

const ProjectCard = ({ slug, title, excerpt, image }) => (
  <CardWrapper>
    <ImgWrapper>
      <Img fluid={image} />
    </ImgWrapper>
    <TextWrapper>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <p>{excerpt}</p>
    </TextWrapper>
  </CardWrapper>
)

export default ProjectCard
