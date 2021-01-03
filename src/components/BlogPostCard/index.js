import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons"

// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  ReadingTimeWrapper,
  Title,
} from "./BlogPostCard.styles"

const BlogPostCard = ({ slug, title, date, readingTime, excerpt, image }) => (
  <CardWrapper>
    <ImgWrapper>
      <Img fluid={image} alt="Blog post intro image" />
    </ImgWrapper>
    <TextWrapper>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <StatWrapper>
        <DateWrapper>
          <FontAwesomeIcon
            icon={faCalendar}
            size="2x"
            color="var(--quat-color)"
            style={{ marginRight: ".5rem" }}
          />
          {date}
        </DateWrapper>
        <ReadingTimeWrapper>
          <FontAwesomeIcon
            icon={faClock}
            size="2x"
            color="var(--quat-color)"
            style={{ marginRight: ".5rem" }}
          />
          {readingTime}
        </ReadingTimeWrapper>
      </StatWrapper>
      <p>{excerpt}</p>
    </TextWrapper>
  </CardWrapper>
)

export default BlogPostCard
