import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  Title,
  Subtitle,
} from "./ProjectCard.styles"

const ProjectCard = ({ slug, title, subtitle, excerpt, image }) => (
  <CardWrapper>
    <Link to={slug}>
      <ImgWrapper>
        <Img fluid={image} alt="Project intro image"/>
      </ImgWrapper>
    </Link>
    <TextWrapper>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <Subtitle>{subtitle}</Subtitle>
      <p>{excerpt}</p>
    </TextWrapper>
  </CardWrapper>
)

export default ProjectCard
